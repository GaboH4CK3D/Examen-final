import { modelo_nomina } from '../Models/nomina.model.js'

export const nomina = (()=>{
    console.log("Nomina si")
})

modelo_nomina.create({
    nombre:"Luis Felipe",
    ape_pat:"Lopez",
    ape_mat:"Camarillo",
    cantidad:"$1500"
})