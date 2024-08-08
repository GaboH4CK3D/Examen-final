import { model } from 'mongoose'
import { esquema_entrenadores } from './entrenadores.model.js'

export const modelo_tecnicos = new model('tecnicos', esquema_entrenadores)