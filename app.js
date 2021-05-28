const express = require('express');// siempre se requiere con el mismo nombre
const app = express();// se pide la funcion de alto nivel llamado express
const port = 3000;// saber donde esta corriendo tu host es importante

// req -->>> request (peticion)
// res -->>> response (respuesta)
// req y res van siempre con el callback

app.get('/',(req,res) => res.send('Por fin! Llegamos al navegador')) //localhost:3000 cuando tecleo eso estoy accediendo a la ruta raiz o root

app.get('/contactos',(req,res) => res.send('Pagina de contacto'))

app.get('/productos',(req,res) => res.send('Pagina de productos'))

app.listen(port, () => console.log('Servidor funcionando en el puerto '+ port));

//cuando clonas un archivo sin node_module para instalarlo se usa: npm install