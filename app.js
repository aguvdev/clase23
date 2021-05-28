const express = require('express');// siempre se requiere con el mismo nombre
const app = express();// se pide la funcion de alto nivel llamado express
const port = 3000;// saber donde esta corriendo tu host es importante

app.listen(port, () => console.log('Servidor funcionando en el puerto '+ port));