const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/portfolio', (req, res) => {
  const lang = req.query.lang === 'en' ? 'en' : 'es';
  const filePath = path.join(__dirname, 'data', `portfolio.${lang}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Backend server corriendo en puerto ${PORT}`);
});

module.exports = app;