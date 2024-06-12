const botao_ADC = document.querySelector("#buttonADC")
const text_ADC = document.querySelector("#adc_text")
const criar_LISTA = document.querySelector(".list_type")
const minha_LISTA = []

botao_ADC.addEventListener('click', (event) => {
    const valor = text_ADC.value
    minha_LISTA.push(valor)

    const listaElementos = minha_LISTA.map(item => `<li><input type="checkbox" class="check_ITEM"> 
 ${item}</li>`)
    criar_LISTA.innerHTML = listaElementos.join("")

    const adc_SUBLIME = document.querySelector("li")
    adc_SUBLIME.addEventListener('change', () => {
        adc_SUBLIME.classList.toggle('check_ITEMUNDER')
    })



})

// function selecionado() {
//     const seila = document.querySelector(".check_ITEM")
//     seila.classList.toggle('check_ITEMUNDER')
//     console.log(seila)
// }