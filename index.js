const express = require('express');
const pokeneas = require('./pokeneas.json');
const pokeneaRouter = require('./routes/pokeneas');
const aleatorioRouter = require('./routes/aleatorio');

const app = express();
const port = 3000;

app.use('/pokenea', pokeneaRouter);
app.use('/aleatorio', aleatorioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});