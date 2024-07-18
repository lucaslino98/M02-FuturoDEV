import './cabecalho.css'
import logo from './zeDelivery.png'

function Cabecalho() {
    return (
        <>
            <header className='header'>
                <div className="d-header" >
                    <img src={logo} alt="logo" />
                    <button className='btn-header'>ENTRAR</button>
                </div>
            </header>
        </>
    )
}

export default Cabecalho