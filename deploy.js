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
  client.ftp.verbose = false; // Отключаем избыточный вывод для ускорения

  const host = process.env.FTP_HOST || "t92401ab.beget.tech";
  const user = process.env.FTP_USER || "t92401ab_taga";
  const password = process.env.FTP_PASSWORD;

  if (!password) {
    throw new Error(
      "Переменная FTP_PASSWORD не задана! Укажите её в GitHub Secrets или в файле .env.local"
    );
  }

  const localDir = path.resolve(__dirname, "out");
  const tempDir = "/public_html_new";
  const targetDir = "/public_html";
  const backupDir = "/public_html_old";

  try {
    console.log(`[1/4] Подключение к ${host}...`);
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

    // Очищаем старые временные папки, если они остались от предыдущих сбоев
    try { await client.removeDir(tempDir); } catch {}
    try { await client.removeDir(backupDir); } catch {}

    console.log(`[2/4] Загрузка файлов в ${tempDir}... (Текущий сайт продолжает работать без простоя)`);
    await client.ensureDir(tempDir);
    await client.uploadFromDir(localDir, tempDir);

    console.log(`[3/4] Мгновенное переключение версии (Zero Downtime)...`);
    const rootList = await client.list("/");
    const targetExists = rootList.some(item => item.name === "public_html");

    if (targetExists) {
      await client.rename(targetDir, backupDir);
    }
    await client.rename(tempDir, targetDir);
    console.log("Новая версия успешно активирована!");

    console.log(`[4/4] Фоновое удаление старой версии...`);
    if (targetExists) {
      try {
        await client.removeDir(backupDir);
      } catch (err) {
        console.warn("Предупреждение при очистке старой версии:", err.message);
      }
    }

    console.log("Деплой на Beget завершён успешно (простой сайта = 0 секунд)");
  } catch (err) {
    console.error("Ошибка при деплое:", err);
    // Откат в случае сбоя переименования
    try {
      const rootList = await client.list("/");
      const hasBackup = rootList.some(item => item.name === "public_html_old");
      const hasTarget = rootList.some(item => item.name === "public_html");
      if (hasBackup && !hasTarget) {
        await client.rename(backupDir, targetDir);
        console.log("Откат к предыдущей версии выполнен успешно.");
      }
    } catch {}
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
