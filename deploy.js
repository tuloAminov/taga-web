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
  client.ftp.verbose = false;

  const host = process.env.FTP_HOST || "t92401ab.beget.tech";
  const user = process.env.FTP_USER || "t92401ab_taga";
  const password = process.env.FTP_PASSWORD;

  if (!password) {
    throw new Error(
      "Переменная FTP_PASSWORD не задана! Укажите её в GitHub Secrets или в файле .env.local"
    );
  }

  const localDir = path.resolve(__dirname, "out");

  try {
    console.log(`[1/3] Подключение к ${host}...`);
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

    // Очищаем случайные временные папки от прошлых сбоев, если они есть
    try { await client.removeDir("/public_html_new"); } catch {}
    try { await client.removeDir("/public_html_old"); } catch {}

    console.log(`[2/3] Загрузка обновлений в /public_html (без удаления старых файлов, сайт работает)...`);
    await client.ensureDir("/public_html");
    await client.cd("/public_html");

    // Загружаем новые файлы поверх существующих — сайт не прерывает работу
    await client.uploadFromDir(localDir);

    console.log(`[3/3] Файлы успешно обновлены!`);
    console.log("Деплой на Beget завершён успешно (простой сайта = 0 секунд)");
  } catch (err) {
    console.error("Ошибка при деплое:", err);
    throw err;
  } finally {
    client.close();
  }
}

deploy()
  .catch((err) => {
    console.error("Ошибка:", err.message || err);
    process.exit(1);
  });
