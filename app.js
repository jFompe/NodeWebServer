require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT  = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', err =>{
  console.log(err);
})

// Serve static content
app.use(express.static('public'))


app.get('/', (req,res) => {
  res.render('home', {
    nombre: 'Jaime Fomperosa',
    titulo: 'Node Web Server'
  })
})

app.get('/generic', (req,res) => {
  res.render('generic', {
    nombre: 'Jaime Fomperosa',
    titulo: 'Node Web Server'
  })
})

app.get('/elements', (req,res) => {
  res.render('elements', {
    nombre: 'Jaime Fomperosa',
    titulo: 'Node Web Server'
  })
})

// app.get('*', (req,res) => {
//   res.sendFile(__dirname + '/public/404.html')
// })

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
