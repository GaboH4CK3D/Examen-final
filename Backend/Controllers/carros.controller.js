import { modelo_carros } from '../Models/carros.model.js'

export const carros = (()=>{
    console.log("Carros si")
})

modelo_carros.create({
    modelo:"Tsuru",
    año:"1862",
    color:"Hueso"
})