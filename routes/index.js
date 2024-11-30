const express = require("express");
const app = express();
app.use(express.json());
const routes = require('./archivo')

app.user('/', routes)
// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});