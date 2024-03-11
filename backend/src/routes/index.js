const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => res.send('Hello world'));

router.post('/registro', async (req, res) => {
    const { email, password, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, institucion } = req.body;

    try {
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario con la contraseña cifrada
        const newUser = new User({ email, password: hashedPassword, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, institucion });

        await newUser.save();

        const token = jwt.sign({ _id: newUser._id }, 'secretkey');
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

router.post('/iniciar', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("El correo no existe");

    // Comparar la contraseña proporcionada con la contraseña cifrada almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
});

router.get('/datos', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Actividad 1',
            description: 'Reunion con cliente',
            date: "2024-01-26"
        },
        {
            _id: 2,
            name: 'Actividad 2',
            description: 'Pruebas',
            date: "2024-01-26"
        },
        {
            _id: 3,
            name: 'Actividad 3',
            description: 'Desarrollo',
            date: "2024-01-26"
        }
    ]);
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Peticion sin autorizacion");
    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send("Peticion sin autorizacion");
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}

module.exports = router;
