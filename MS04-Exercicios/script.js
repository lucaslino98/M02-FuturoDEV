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
    <span>${episodios.episodio}</span>
    <span>${episodios.tempo}</span>
    `
    listaEP.appendChild(cardEP)
})


