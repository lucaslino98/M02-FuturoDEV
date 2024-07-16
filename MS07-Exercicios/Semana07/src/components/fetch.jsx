import { useEffect, useState } from "react";

function Fetch() {
    const [noticia, setNoticia] = useState(null)

    useEffect(() => {
        const resposta = async () => {
            const retorno = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
            const noticiaData = await retorno.json()
            const publi = noticiaData.items[0].titulo
            setNoticia(publi)
        }
        resposta()
    }), [noticia];


    return (
        <>
            <div>
                <h1>{noticia}</h1>
            </div>
        </>
    )

}

export default Fetch