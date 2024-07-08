import './Form.css'
import { useState } from 'react'


function Form() {


    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit() {
        const form = { nome, email, mensagem }
        console.log('Formulário  a ser enviado:', form)
    }

    return (
        <>
            <div className='f-For'>


                <div className='c-Loja'>
                    <h2>Loja Online</h2>
                </div>

                <div className="d-Form">

                    <form action="" className="m-Form">
                        <div className="d-Lin">
                            <div className="d-Tex">
                                <label htmlFor="d-Text">Nome</label>
                                <input className='i-Put' type="text" id="d-Text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className="d-Email">
                                <label htmlFor="d-Email">Email</label>
                                <input className='i-Put' type="email" id="d-Email" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="d-Msg">
                            <label htmlFor="d-Area">Mensagem</label>
                            {/* <input className='d-Put' id="d-Area" type="text" placeholder="Digite uma mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} /> */}
                            <textarea rows="5" id="d-Area" name="mensagem" placeholder="O que você precisa?"></textarea>
                            <button className='btn' onClick={() => handleSubmit()}>Enviar</button>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Form