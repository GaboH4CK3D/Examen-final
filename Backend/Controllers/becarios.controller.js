import { modelo_becarios } from "../Models/becarios.model.js"

export const becarios = (()=>{
    console.log("Becarios si")
})

modelo_becarios.create({
    nombre:"Jose Manuel",
    ape_pat:"Perez",
    ape_mat:"Luna",
    correo:"jos.manu@gmail.com",
    telefono:"449-397-20-37",
    direccion:"Bogota #262"
})