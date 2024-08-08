import { modelo_tecnicos } from '../Models/tecnicos.model.js'

export const tecnicos = (()=>{
    console.log("Tecnicos si")
})

modelo_tecnicos.create({
    nombre:"Luis Felipe",
    ape_pat:"Lopez",
    ape_mat:"Camarillo",
    telefono:"449-387-28-12",
    direccion:"Alvaro Obregon #409",
    departamento:"Ventas"
})