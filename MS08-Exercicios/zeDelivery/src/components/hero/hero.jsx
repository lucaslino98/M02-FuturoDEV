import './hero.css'

import img from './pin.png'

function Hero() {
    return (
        <>
            <div className="hero">
                <div className='text'>
                    <h4 className='text-hero'>
                        Bebida rápida,
                        gelada e no precinho?
                    </h4>

                    <h5 className='text-hero' F>
                        O Zé entrega tudo.
                    </h5>
                </div>
                <div className='input-div'>
                    {/* <img src={img} alt="pointer" /> */}
                    <input className="input-hero" type="text" placeholder="Inserir endereço para ver preço" />
                </div>
            </div>
        </>
    )
}



export default Hero