


const btn_ADC = document.querySelector('#btn_ADC')
const span_ADC = document.querySelector('#span_ADC')

const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

btn_ADC.addEventListener('click', () => {
    const listaElementos = produtos.map(produtos => `<li>${produtos.nome}: R$ ${produtos.valor.toFixed(2)}</li>`);

    console.log(listaElementos);
    span_ADC.innerHTML = `<ul>${listaElementos.join("")}</ul>`;
    console.log(span_ADC);
});