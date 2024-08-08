import { modelo_entrenadores } from '../Models/entrenadores.model.js'

export const entrenadores = (()=>{
    console.log("Entrenadores si")
})

modelo_entrenadores.create({
    nombre:"Luis Felipe",
    ape_pat:"Lopez",
    ape_mat:"Camarillo",
    telefono:"449-387-28-12",
    direccion:"Alvaro Obregon #409",
    departamento:"Ventas"
})