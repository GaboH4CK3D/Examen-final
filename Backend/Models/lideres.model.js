import { Schema, model } from 'mongoose'

const esquema_lideres = new Schema({
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
    }
})

export const modelo_lideres = new model ('lideres', esquema_lideres)