import './CardBike.css'
function CardBike({ modelo, preco, imgSrc, escolhaText }) {

    return (
        <>
            <article className='c-Section'>
                <ul className='u-list'>
                    <li>
                        <img src={imgSrc} />
                        <h3 className='n-bike'>
                            <span className='t-span'></span>
                            {modelo}</h3>
                        <span> R${preco}</span>
                    </li>
                </ul>


            </article>
        </>
    )
}

export default CardBike