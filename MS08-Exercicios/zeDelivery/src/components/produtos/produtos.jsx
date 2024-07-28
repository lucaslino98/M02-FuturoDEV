import './produtos.css';

function Produtos() {
    const categorias = [
        {
            id: 1,
            imagem: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png',
            texto: 'Refrigerantes'
        },{
            id: 2,
            imagem: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png',
            texto: 'Refrigerantes'
        }
        ,{
            id: 3,
            imagem: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png',
            texto: 'Refrigerantes'
        },{
            id: 4,
            imagem: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png',
            texto: 'Refrigerantes'
        },{
            id: 5,
            imagem: 'https://yorkgrill.com.br/wp-content/uploads/2022/06/refrigerante.png',
            texto: 'Refrigerantes'
        }
    ];

    return (
        <div className='components-produtos'>
            <div className='escolha-produtos'>
                {categorias.map(categoria => (
                    <ul className='produtos' key={categoria.id}>
                        <li className='li-produtos'>
                            <img src={categoria.imagem} alt={categoria.texto} />
                        </li>
                            <span>{categoria.texto}</span>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Produtos;
