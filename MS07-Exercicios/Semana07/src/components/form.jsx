import { useEffect, useState } from "react";

function Form() {


    // function cUsuario(e) {
    //     e.preventDefault()
    //     console.log(`${nome},${email},${idade}`)

    // }

    const [formdata, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })

    const [message, setMessage] = useState(null)
    useEffect(() => {
        const isError = Object.values(formdata).reduce((totalizador, item) => {
            if (!item) totalizador += 1
            return totalizador
        }, 0)

        if (isError > 0) {
            setMessage('Preenchar todos campos')
        } else {
            setMessage(null)
        }
    })

    return (
        <>
            <form >
                <label htmlFor="text">Nome</label>
                <input
                    type="text"
                    id="text"
                    placeholder="Digite seu nome"
                    name="nome"
                    onChange={(e) => setFormdata(prevState => ({ ...prevState, nome: e.target.value }))}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu E-mail"
                    name="email"
                    onChange={(e) => setFormdata(prevState => ({ ...prevState, email: e.target.value }))}

                />

                <label htmlFor="idade">Nome</label>
                <input
                    type="text"
                    id="idade"
                    placeholder="Digite sua idade"
                    name="idade"
                    onChange={(e) => setFormdata(prevState => ({ ...prevState, idade: e.target.value }))}

                />
                <button>Cadastrar</button>
            </form>

            <p>
                <code>
                    {message}
                    {/* {JSON.stringify(formdata,)} */}
                </code>
            </p>
        </>
    )
}

export default Form