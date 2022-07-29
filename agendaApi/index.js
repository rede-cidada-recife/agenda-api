const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors({ 
    credentials: true, 
    origin: "*", 
    optionsSuccessStatus: 200 
})) 
app.use(express.json())

require('./src/routes/route')(app);

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.i4xtcda.mongodb.net/?retryWrites=true&w=majority',
)
.then(
    () => {
        console.log("conectou bb")
        const port = process.env.PORT || 3001;
        app.listen(port)
    }
)
.catch(
    (error) => {
        console.log("Eita! deu erro ao conectar com o banco, cebrutius!!!")
        console.log(error)   
    }
)

