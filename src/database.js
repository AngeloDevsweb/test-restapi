const mongoose = require('mongoose')

//cadena de conexion

const URI ='mongodb+srv://angelo:<Rociodta8921>@cluster0.tgyl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('la base de datos esta conectada en: ', URI);
})