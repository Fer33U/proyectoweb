//*Importar modulo de express, declaracion de app */
const express = require('express');
const app = express();

require('./database')

app.use(express.json());

//** Importar rutas, uso de rutas */
app.use(require('./routes/index'))

//**Inicio de servidor */
app.listen(3000);
console.log('Server on port', 3000);