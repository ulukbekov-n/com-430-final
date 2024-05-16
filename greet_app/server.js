const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/greet', (req, res) => {
  const name = req.body.name;
  const greeting = `Hello, ${name}!`;
  res.json({ greeting });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

