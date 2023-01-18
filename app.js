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