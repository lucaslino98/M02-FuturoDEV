import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Página de tudo</h1>
            <Link to='/login'>
                <p> Clique para Login</p>
            </Link>

            <Link to='/cadastro'>
                <p>Clique para cadastro</p>
            </Link>
        </>
    )
}

export default Home