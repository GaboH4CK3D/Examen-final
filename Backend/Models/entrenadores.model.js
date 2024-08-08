import { Schema, model } from 'mongoose'

export const esquema_entrenadores = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    telefon:{
        type:String
    },
    dirreccion:{
        type:String
    },
    departamento:{
        type:String
    }
})

export const modelo_entrenadores = new model ('entrenadores', esquema_entrenadores)