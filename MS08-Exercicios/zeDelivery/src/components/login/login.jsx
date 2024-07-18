import { useState } from 'react'
import './login.css'
import logo from './zeDelivery.png'

function Login() {

    const [login, setLogin] = useState(
        {
            password: '',
            email: ''
        }
    )

    function handleChange(e) {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Email informado :', login.email)
        console.log('Senha informada :', login.password)
    }

    return (
        <>
            <div className="p-Login">
                <div className='f-Login'>
                    <img src={logo} alt="logo zé delivery" />
                    <h6>Insita seu email para login:</h6>

                    <form onSubmit={handleSubmit}>

                        <input type="text"
                            name="email"
                            placeholder='Digite seu E-mail'
                            onChange={handleChange} />
                        <input type="password"
                            name="password"
                            placeholder='Digite sua senha'
                            onChange={handleChange} />
                    </form>

                    <button className='btn'>ENTRAR</button>
                    <h6>Precisa de ajuda? Entre no <a href="#">Me ajuda, Zé!</a></h6>
                </div>
            </div>
        </>
    )
}

export default Login