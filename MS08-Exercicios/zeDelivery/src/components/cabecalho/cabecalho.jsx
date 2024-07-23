import { Link } from 'react-router-dom'
import './cabecalho.css'
import logo from './zeDelivery.png'

function Cabecalho() {
    return (
        <>
            <header className='header'>
                <div className="d-header" >
                    <img src={logo} alt="logo" />
                    <Link className='btn-link' to='/login'>
                        <button className='btn-header'>ENTRAR</button>
                    </Link>
                </div>
            </header >
        </>
    )
}

export default Cabecalho