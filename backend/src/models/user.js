const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    fechaNacimiento: Date,
    institucion: String
}, { timestamps: true });

module.exports = model('User', userSchema);
