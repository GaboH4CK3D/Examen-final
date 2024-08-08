import { model } from 'mongoose'
import { esquema_carros } from './carros.model.js'

export const modelo_stock = new model('stock', esquema_carros)