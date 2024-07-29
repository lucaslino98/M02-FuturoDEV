import { Outlet, Link } from 'react-router-dom';

function CameIN() {
    return (
        <>
            <h1>Você está logado</h1>
            <p>Rota privada</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default CameIN