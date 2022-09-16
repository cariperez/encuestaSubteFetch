// DOM preguntas

const preg1 = document.querySelector("#preg1")
const preg2 = document.querySelector("#preg2")
const preg3 = document.querySelector("#preg3")
const preg4 = document.querySelector("#preg4")
const preg5 = document.querySelector("#preg5")

function cargaPreg1 () {
    opcionesCalif.forEach(opcion =>{
        preg1.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg2 () {
    opcionesModos.forEach(opcion =>{
        preg2.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg3 () {
    opcionesSiNo.forEach(opcion =>{
        preg3.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg4 () {
    opcionesCalif.forEach(opcion =>{
        preg4.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg5 () {
    opcionesCalif.forEach(opcion =>{
        preg5.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

cargaPreg1()
cargaPreg2()
cargaPreg3()
cargaPreg4()
cargaPreg5()


// Crear el objeto Registro donde se van a almacenar las respuestas

class Registro {
    constructor(id, edad, correo, linea, estacionOn, estacionOff, hora, motivo, rta1, rta2, rta3, rta4, rta5, rta6, rta7, rta8, rta9, rta10, rta11) {
    this.id = id;
    this.edad = edad;
    this.correo = correo;
    this.linea = linea;
    this.estOn = estOn;
    this.estOff = estOff;
    this.hora = hora;
    this.motivo = motivo;
    this.rta1 = rta1;
    this.rta2 = rta2;
    this.rta3 = rta3;
    this.rta4 = rta4;
    this.rta5 = rta5;
    this.rta6 = rta6;
    this.rta7 = rta7;
    this.rta8 = rta8;
    this.rta9 = rta9;
    this.rta10 = rta10;
    this.rta11 = rta11;
    }
}

//  Crear objeto usando la estructura de Registro, con los datos ingresados por el usuario

const nuevoEncuestado = new Registro (idEncuestado.value, edadEncuestado.value, correoEncuestado.value, linea.value, estOn.value, estOff.value, horaViaje.value, motivoViaje.value, preg1.value, preg2.value, preg3.value, preg4.value, preg5.value, preg6.value, preg7.value, preg8.value, preg9.value, preg10.value, preg11.value)


//Autocompletado ID:

idEncuestado.value = parseInt(Math.random() * 10000)


// Función llenarEncuesta para probar el simulador. Los input que son para seleccionar no se ven completos, pero el simulador funciona igual, los toma como completados.

const llenarEncuesta = () => {
    edadEncuestado.value = 20;
    correoEncuestado.value = "encuesta@subte.com";
    linea.value = "B";
    estOn.value = "Rosas";
    estOff.value= "Florida";
    horaViaje.value= "8";
    motivoViaje.value= "Trabajo";
    preg1.value= "1-Muy bueno"; 
    preg2.value= "1-Subte";
    preg3.value= "2-No";
    preg4.value= "2-Bueno";
    preg5.value= "1-Muy bueno";
    preg6.value= 20;
    preg7.value= "Av. Rivadavia" ;
    preg8.value= "Av. Carabobo";
    preg9.value= "Flores";
    preg10.value= "CABA";
    preg11.value= "CABA";
}


//  Guardar respuestas en Local Storage a través del botón "Enviar Respuestas"

const datosCompletos = () => {
    if (correoEncuestado.value !== "" && linea.value !== "..." && estOn.value !== "" && estOff.value !== "" && horaViaje.value !== "" && motivoViaje !== "..." && preg1.value !== "..." && preg2.value !== "..." && preg3.value !== "..." && preg4.value !== "..." && preg5.value !== "..." && preg6.value !== "" && preg7.value !== "" && preg8.value !== "" && preg9.value !== "" && preg10.value !== "" && preg11.value !== ""){
            return true
        } else {
            return false
        }
}

const guardarEncuesta = () => {
    if (datosCompletos()) {
    const datosResp = {
        id: idEncuestado.value,
        edad: edadEncuestado.value,
        correo: correoEncuestado.value,
        linea: linea.value,
        estOn: estOn.value,
        estOff: estOff.value,
        hora: horaViaje.value,
        motivo: motivoViaje.value,
        rta1: preg1.value, 
        rta2: preg2.value,
        rta3: preg3.value,
        rta4: preg4.value,
        rta5: preg5.value,
        rta6: preg6.value,
        rta7: preg7.value,
        rta8: preg8.value,
        rta9: preg9.value,
        rta10: preg10.value,
        rta11: preg11.value,
    }
   
    let arrayRtas = [];
    arrayRtas.push(datosResp)
    
    let arrayRtasJSON = JSON.stringify(arrayRtas)
    localStorage.setItem ("guardarEncuesta", arrayRtasJSON)

    Swal.fire({
        icon: 'success',
        title: 'Respuestas enviadas',
        text: 'Gracias por participar!',
        footer: 'El formulario se va a reiniciar.'
    })

    setTimeout (() => {
        location.reload()},6000)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan datos',
            text: 'Por favor, completá todos los campos.',
        })
    }
} 

const botonA = document.querySelector(".btn-rtas")

botonA.addEventListener ("click", (guardarEncuesta))


// Mostrar respuestas

const resumen = JSON.parse(localStorage.getItem("guardarEncuesta")) || []; 
const respuestas = document.querySelector(".respuestas");

function mostrarRespuestas () {
    resumen.forEach(rta =>{
    respuestas.innerHTML += `<tr>
                            <td>${rta.index}</td>
                            <td>${rta.value}</td>`
    });
}

const botonB = document.querySelector(".btn-resumen")

botonB.addEventListener ("click", (mostrarRespuestas))


// Limpiar formulario

const reiniciarEncuesta = ()=> {
    Swal.fire({
        title: 'Se borrarán las respuestas.',
        text: "Estás segur@ de que querés reiniciar?",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar.',
        confirmButtonColor: '#008f39',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reiniciar.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            location.reload(),
          )
        }
    })
}

const botonC = document.querySelector(".btn-reiniciar")

botonC.addEventListener ("click", (reiniciarEncuesta))

//Mapa:

// const map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);