const express = require('express')
const pokeneas = require('../pokeneas.json')

const router = express.Router();

router.get('/', (req, res) => {
// Obtener un número aleatorio entre 1 y la cantidad de Pokeneas que tienes
const randomNumber = Math.floor(Math.random() * Object.keys(pokeneas).length) + 1;

// Obtener el Pokenea correspondiente al número aleatorio
const pokenea = pokeneas[randomNumber];

// Crear un objeto con las propiedades que se desean mostrar
const pokeneaInfo = {
    imagen: pokenea.Imagen,
    frase: pokenea.Frase,
    Contenedor: process.env.HOSTNAME // Obtener el nombre del contenedor desde la variable de entorno HOSTNAME
  };

// Enviar el objeto como respuesta
res.json(pokeneaInfo);
});

module.exports = router;