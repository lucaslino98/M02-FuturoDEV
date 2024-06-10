const botao_ADC = document.querySelector("#buttonADC")
const text_ADC = document.querySelector("#adc_text")
const criar_LISTA = document.querySelector(".list_type")
const minha_LISTA = []

botao_ADC.addEventListener('click', (event) => {
    const valor = text_ADC.value
    minha_LISTA.push(valor)

    const listaElementos = minha_LISTA.map(item => `<li>- ${item}</li>`)

    criar_LISTA.innerHTML = listaElementos.join("")
})