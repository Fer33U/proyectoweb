//**Conexion a mongodb**/

const mongoose = require('mongoose');

//**Configuracion de conexion base de datos */
//**Especificacion de base de datos = feedback */
mongoose.connect('mongodb://localhost/feedback',{

})
//**Mensaje al conectar exitosamente la base de datos */
    .then(db => console.log('Database is Connected'))
    //**Mensaje si la conexion no es exitosa */
    .catch(err => console.log(err));