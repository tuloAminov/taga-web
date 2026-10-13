const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");

// Автоматически подгружаем .env.local или .env для локальных запусков
if (typeof process.loadEnvFile === "function") {
  const envLocal = path.resolve(__dirname, ".env.local");
  const env = path.resolve(__dirname, ".env");
  if (fs.existsSync(envLocal)) {
    process.loadEnvFile(envLocal);
  } else if (fs.existsSync(env)) {
    process.loadEnvFile(env);
  }
}

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  const host = process.env.FTP_HOST || "t92401ab.beget.tech";
  const user = process.env.FTP_USER || "t92401ab_taga";
  const password = process.env.FTP_PASSWORD;

  if (!password) {
    throw new Error(
      "Переменная FTP_PASSWORD не задана! Укажите её в GitHub Secrets или в файле .env.local"
    );
  }

  try {
    console.log(`Connecting to ${host} as ${user}...`);
    await client.access({
      host,
      user,
      password,
      port: 21,
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    });

    console.log("Navigating to /public_html...");
    await client.ensureDir("/public_html");
    await client.cd("/public_html");

    console.log("Clearing remote directory...");
    await client.clearWorkingDir();

    console.log("Uploading 'out' directory contents...");
    const localDir = path.resolve(__dirname, "out");
    await client.uploadFromDir(localDir);

    console.log("Upload completed successfully!");
  } catch (err) {
    console.error("Deploy failed:", err);
    throw err;
  } finally {
    client.close();
  }
}

deploy()
  .then(() => {
    console.log("Деплой на Beget завершён успешно");
  })
  .catch((err) => {
    console.error("Ошибка при деплое:", err.message || err);
    process.exit(1);
  });
