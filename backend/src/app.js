const express = require('express');
const cors = require('cors');

// Importando routers
const studentsRouter = require('./routes/students');
const subjectsRouter = require('./routes/subjects');
const gradesRouter = require('./routes/grades');
const authRouter = require('./routes/authRoute');

const app = express();

// Middlewares
app.use(cors()); // Permite todas las solicitudes CORS (para desarrollo)
app.use(express.json()); // Permite a Express entender JSON

// Rutas
app.use('/api/students', studentsRouter);
app.use('/api/subjects', subjectsRouter);
app.use('/api/grades', gradesRouter);
app.use('/api/auth', authRouter);

// Manejador de errores básico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Página de bienvenida o raíz
app.get('/', (req, res) => {
    res.send('Welcome to the School Management API!');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

