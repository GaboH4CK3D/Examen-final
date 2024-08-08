import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dovenv from 'dotenv'

import {becarios} from './Backend/Controllers/becarios.controller'
import {carros} from './Backend/Controllers/carros.controller'
import {empleados} from './Backend/Controllers/empleados.controller'
import {enternadores} from './Backend/Controllers/enternadores.controller'
import {lideres} from './Backend/Controllers/lideres.controller'
import {nomina} from './Backend/Controllers/nomina.controller'
import {stock} from './Backend/Controllers/stock.controller'
import {tecnicos} from './Backend/Controllers/tecnicos.controller'

dotenv.config()
mongoose.connect(process.env.url_bd)

.then(()=>{
    console.log('Si funciona el server')
})
.catch(()=>{
    console.log('No funciona el server')
})

const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('Si escucha')
})

becarios()
carros()
empleados()
enternadores()
lideres()
nomina()
stock()
tecnicos()
