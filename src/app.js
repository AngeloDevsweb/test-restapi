const express = require('express')
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.get('/', (req, res)=>{
    res.send('Bienvenida a la api para react native')
})

//ruta de la api usuario
app.use('/api/users', require('./routes/usuario'))

module.exports = app;