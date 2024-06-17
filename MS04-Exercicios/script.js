const sobre = document.querySelector('#s_OBRE')
const trailer = document.querySelector('#t_RAILER')
const atores = document.querySelector('#a_TORES')
const avaliacoes = document.querySelector('#a_VALI')

sobre.addEventListener('click', () => {
    window.alert('Página em construção')
})
trailer.addEventListener('click', () => {
    window.alert('Página em construção')
})
atores.addEventListener('click', () => {
    window.alert('Página em construção')
})
avaliacoes.addEventListener('click', () => {
    window.alert('Página em construção')
})


const episodios = [
    {
        id: 1,
        episodio: 'T1-01',
        tempo: '39min'
    },
    {
        id: 2,
        episodio: 'T1-02',
        tempo: '44min'
    },
    {
        id: 3,
        episodio: 'T1-03',
        tempo: '49min'
    }
]
const listaEP = document.getElementById('lista-ep')

episodios.forEach(episodios => {
    const cardEP = document.createElement('div')
    cardEP.className = 'box-epsodio'
    cardEP.innerHTML = `

    <div class="inf_eps">
    <span>${episodios.episodio}</span>
    <span>${episodios.tempo}</span>
    </div>

    <span class="img_play" id="play-${episodios.id}">
    <img src="src/img/play_circle_24dp_FILL0_wght400_GRAD0_opsz24.png" alt="para dar play">
    </span>
    `
    listaEP.appendChild(cardEP)
})

episodios.forEach(episodio => {
    const playButton = document.getElementById(`play-${episodio.id}`)
    playButton.addEventListener('click', () => {
        alert(`Você clicou no ep: ${episodio.episodio}`)
    })
})

