//*Importar modulo de express, declaracion de app */
const express = require('express');
const app = express();
const cors = require('cors');

require('./database')


app.use(cors());
app.use(express.json());

//** Importar rutas, uso de rutas */
app.use(require('./routes/index'))

//**Inicio de servidor */
app.listen(3000);
console.log('Server on port', 3000);