import { Schema, model } from 'mongoose'

export const esquema_becarios = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    correo:{
        type:String
    },
    telefon:{
        type:String
    },
    dirreccion:{
        type:String
    }
})

export const modelo_becarios = new model ('becarios', esquema_becarios)