const express = require('express');
const pokeneas = require('../pokeneas.json');
const os = require("os")
const router = express.Router();

router.get('/', (req, res) => {
  // Obtener un número aleatorio entre 1 y la cantidad de Pokeneas que tienes
  const randomNumber = Math.floor(Math.random() * Object.keys(pokeneas).length) + 1;

  // Obtener el Pokenea correspondiente al número aleatorio
  const pokenea = pokeneas[randomNumber];

  // Obtener la URL completa de la imagen en el bucket público de GCS
  const imageBucketUrl = 'https://storage.googleapis.com/taller2-pokeneas1/';
  const imageUrl = imageBucketUrl + pokenea.Imagen;

  // Crear un objeto con las propiedades que se desean mostrar
  const pokeneaInfo = {
    imagen: imageUrl,
    frase: pokenea.Frase,
    Contenedor: os.hostname() // Obtener el nombre del contenedor desde la variable de entorno HOSTNAME
  };

  // Renderizar la imagen y la frase en una página HTML
  res.send(`
    <html>
      <body>
        <h1>Pokenea Information</h1>
        <img src="${pokeneaInfo.imagen}" alt="Pokenea Image" width="300" height="300">
        <p>${pokeneaInfo.frase}</p>
        <p>contenedor: ${pokeneaInfo.Contenedor}<p>
      </body>
    </html>
  `);
});

module.exports = router;
