import CardBike from './CardBike'

import './CardBike.css'



let bicicletas = [
    {
        id: 0, nomeModelo: 'Magic Might', preco: 2499, categoria: 'A',
        imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
    },
    {
        id: 1, nomeModelo: 'Nimbus Stark', preco: 4999, categoria: 'A',
        imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',
    },
    {
        id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999, categoria: 'C',
        imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
    }
]


function Section() {
    return (
        <>
            <div className="Section">
                <h2 className='c-Name'>escolha a sua
                    <span className='p-cor'>.</span>
                </h2>

                <div className='b-Card'>
                    {bicicletas.map(bike =>
                        <CardBike key={bike.id} modelo={bike.nomeModelo} preco={bike.preco} imgSrc={bike.imgSrc} />
                    )}
                    {/* <CardBike modelo='Magic Might' preco='2499' imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg'></CardBike>
                <CardBike modelo='Magic Might' preco='2499' imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg'></CardBike> */}
                </div>
            </div>

        </>
    )
}

export default Section