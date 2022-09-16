const idEncuestado = document.querySelector("#id")
const edadEncuestado = document.querySelector("#edad")
const correoEncuestado = document.querySelector("#correo")
const linea = document.querySelector("#linea")
const estOn = document.querySelector("#estOn")
const estOff = document.querySelector("#estOff")
const horaViaje = document.querySelector("#hora")
const motivoViaje = document.querySelector("#motivo")

// Base de datos ficticia para Select:

const opcionesCalif = [
    {opcion: "1-Muy bueno", valor:1},
    {opcion: "2-Bueno", valor:2},
    {opcion: "3-Regular", valor:3},
    {opcion: "4-Malo", valor:4},
    {opcion: "5-Muy malo", valor:5},
    {opcion: "9-NS/NC", valor:6},
]

const opcionesModos = [
    {opcion: "1-Subte", valor:1},
    {opcion: "2-Colectivo", valor:2}, 
    {opcion: "3-Tren", valor:3},
    {opcion: "4-Metrobús", valor:4},
    {opcion: "5-Premetro", valor:5},
    {opcion: "7-Otros", valor: 7},
]

const opcionesSiNo = [
    {opcion: "1-Si", valor: 1},
    {opcion: "2-No",valor: 2},
]
