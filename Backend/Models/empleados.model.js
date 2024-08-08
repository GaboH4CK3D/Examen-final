import { model } from 'mongoose'
import { esquema_becarios } from './becarios.model.js'

export const modelo_empleados = new model('empleados', esquema_becarios)