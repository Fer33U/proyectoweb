//**Importar modulo mongoose */
const {Schema, model} = require ('mongoose');

//**Definicion de esquema que almacenara en la base de datos */
const userSchema = new Schema({
    email: String,
    password: String
},
{ timestamps: true
})

//**Exportar el modelo */
module.exports = model('User', userSchema);