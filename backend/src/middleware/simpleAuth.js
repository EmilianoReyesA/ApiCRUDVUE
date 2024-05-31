// autenticación simple con JWT para pruebas

const simpleAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: 'A token is required for authentication' });
    }

    console.log('JWT Token:', token);

    // Continúa con el flujo normal de la aplicación
    next();
};

module.exports = simpleAuth;
