//Declaracions
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

const app = express()

//motor para generar las vistas
app.set('view engine', 'hbs')
//direccion de las vistas parciales
hbs.registerPartials(__dirname+'/views/partials', ()=>{})

app.use(express.static('public')) // parte publica de la app
app.use(bodyParser.urlencoded({extended: true}))//procesar body en las solicitudes tipo POST
app.use(bodyParser.json())// manejar datos en forato {}

//procesa solicitudes de tipo GET y POST
// get - Dashboard y 404
// post - login

//rutas
app.get

app.post('/dashboard', (req, res)=>{
    res.render('dashboard')
})

app.get('/login', (req, res) => {
    //res.send('aqui va el login')
    res.render('login')
})

app.get('*', (req,res)=>{
    //res.send('aqui va el 404 por get')
    res.render('404', {
        nombre:"Jose Luis",
        edad:"27"
    })
})

app.listen(port, ()=>{
    console.log('servidor en express corriendo en el puerto ', port);
})