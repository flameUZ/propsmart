const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('=================================');
  console.log('PropSmart is LIVE!');
  console.log('Open browser: http://localhost:' + PORT);
  console.log('=================================');
});
