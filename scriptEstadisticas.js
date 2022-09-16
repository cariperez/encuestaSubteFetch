// Ver Estadísticas

setTimeout (() => {
    const loading = document.querySelector(".loading")
    loading.innerHTML = ""
},2500)

const cards = document.querySelector(".estadisticas")

setTimeout (() => {
    fetch('https://631a378bdc236c0b1ed9d99c.mockapi.io/Analisis')
    .then ((response) => response.json())
    .then ((data) =>{
        data.forEach ((contenido) => {
        cards.innerHTML += 
        `<div class="cards">
            <h4>Línea ${contenido.linea}</h4>                 
            <p>Pasajeros promedio día hábil: ${contenido.paxDiarios}</p>
            <p>Porcentaje pasajeros de toda la red: ${contenido.porcentaje}</p>
            <p>Ranking: ${contenido.ranking}</p>
        </div>`
        })
    })
},3000)