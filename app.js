//Requerimos Express
const express = require("express");
const app = express();

//Requerimos Path
const path = require("path");
const publicPath = path.resolve(__dirname, "./public")

//Definimos la carpeta public
app.use(express.static(publicPath));

//Iniciamos el servidor
app.listen(3000, () =>
    console.log("Servidor corriendo en puerto 3000")
);

//Creamos la ruta para el home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

//Creamos la ruta para el footer.html
app.get('/footer', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/footer.html"));
});

//Creamos la ruta para el header.html
app.get('/header', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/header.html"));
});

//Creamos la ruta para el crear_producto.html
app.get('/crear-producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/crear_producto.html"));
});

//Creamos la ruta para el register.html
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

//Creamos la ruta para el login.html
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});