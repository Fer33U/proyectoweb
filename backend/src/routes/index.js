//**Importar Router */
const { Router } = require('express')
const router = Router();

const User = require('../models/user')

const jwt = require('jsonwebtoken');

//**Definicion de ruta raiz */
router.get('/', (req, res) => res.send('Hello world'))

//**Definir ruta de registro */
router.post('/registro', async (req, res) => {
    const { email, password} = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey' )
    res.status(200).json({token})

})


router.post('/iniciar', async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send("El correo no existe");
    if(user.password !== password) return res.status(401).send("Contrasena Incorrecta")

    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token});
})

router.get('/datos', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Actividad 1',
            description: 'Reunion con cliente',
            date: "2024-01-26"        },
        {
            _id: 2,
            name: 'Actividad 2',
            description: 'Pruebas',
            date: "2024-01-26"        },

            {
            _id: 3,
            name: 'Actividad 3',
            description: 'Desarrollo',
            date: "2024-01-26"        }
    ])
})

router.get('/actividades', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Actividad 1',
            description: 'Reunion con cliente',
            date: "2024-01-26"        },
        {
            _id: 2,
            name: 'Actividad 2',
            description: 'Pruebas',
            date: "2024-01-26"        },

            {
            _id: 3,
            name: 'Actividad 3',
            description: 'Desarrollo',
            date: "2024-01-26"        }
    ])
})

router.get('/profile', verifyToken, (req, res) =>{
    res.send(req.userId);
})


//**Exportar*/
module.exports = router;


function verifyToken(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send("Peticion sin autorizacion");
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send("Peticion sin autorizacion");
    }

    const payload = jwt.verify(token, 'secretkey' )
    req.userId = payload._id;
    next();
}