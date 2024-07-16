import { useState } from 'react';

function Estado() {

    const [valorInput, setValorInput] = useState('');
    const [listaItem, setListaIntem] = useState([]);

    const haddleInput = (e) => { valorInput(e.target.value) }
    

    function handdleAddIntem(event) {
        event.preventDefault()
        if (listaItem) {
            setListaIntem(listaA => {
                return [...listaA, valorInput]
            })
        }
        console.log(valorInput)
    }

    return (
        <>
            <form onSubmit={handdleAddIntem}>
                <input
                    type="text"
                    onChange={event => { setValorInput(event.target.value) }}
                />
                <button>ADC</button>
            </form>

            <p>
                <strong>Lista:</strong>
            </p>

            <ul>
                {
                    listaItem.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
            </ul>

        </>



    )

}


export default Estado