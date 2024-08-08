import { Schema, model } from 'mongoose'

const esquema_nomina = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    cantidad:{
        type:String
    }
})

export const modelo_nomina = new model ('nomina', esquema_nomina)