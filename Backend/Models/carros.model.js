import { Schema, model } from 'mongoose'

export const esquema_carros = new Schema({
    modleo:{
        type:String
    },
    año:{
        type:String
    },
    color:{
        type:String
    }
})

export const modelo_carros = new model ('carros', esquema_carros)