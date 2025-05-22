
const express = require('express');
const path = require('path');
const fs = require('fs');
const { createServer } = require('./dist/server');

const app = express();
const PORT = process.env.PORT || 3000;

// Подключаем статические файлы из build
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware для SSR
app.get('*', (req, res) => {
  try {
    const url = req.originalUrl;
    
    // Если это запрос к статическому файлу, пропускаем SSR
    if (url.includes('.')) {
      return res.status(404).send('Not found');
    }
    
    // Получаем HTML с серверным рендерингом
    const { renderFullPage } = createServer();
    const html = renderFullPage(url);
    
    // Отправляем результат
    res.send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    
    // В случае ошибки отправляем статический index.html
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(500).send('Server error');
    }
  }
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
