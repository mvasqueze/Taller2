const express = require('express')
const pokeneas = require('../pokeneas.json')
const os = require("os")
const router = express.Router();

router.get('/', (req, res) => {
// Obtener un número aleatorio entre 1 y la cantidad de Pokeneas que tienes
const randomNumber = Math.floor(Math.random() * Object.keys(pokeneas).length) + 1;

// Obtener el Pokenea correspondiente al número aleatorio
const pokenea = pokeneas[randomNumber];
const containerId = os.hostname();
// Crear un objeto con las propiedades que se desean mostrar
const pokeneaInfo = {
id: pokenea.id,
Nombre: pokenea.Nombre,
Altura: pokenea.Altura,
Habilidad: pokenea.Habilidad,
Contenedor: containerId // Obtener el nombre del contenedor desde la variable de entorno HOSTNAME
};

// Enviar el objeto como respuesta
res.json(pokeneaInfo);
});

module.exports = router;
