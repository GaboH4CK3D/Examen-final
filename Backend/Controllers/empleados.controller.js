import { modelo_empleados } from '../Models/empleados.model.js'

export const empleados = (()=>{
    console.log("Empleados si")
})

modelo_empleados.create({
    nombre:"Luis Felipe",
    ape_pat:"Lopez",
    ape_mat:"Camarillo",
    correo:"lui.feli@gmail.com",
    telefono:"449-387-28-12",
    direccion:"Alvaro Obregon #409"
})