import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../page/home'
import Login from '../components/SignIn/signin'
import Cadastro from '../components/Form/form'
import CameIN from '../components/cameIn/cameIn'
import PrivateRoute from './privateRoutes'

function RoutesComponent() {

    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/logado' element={<PrivateRoute><CameIN /></PrivateRoute>}>
                    <Route path='home' element={<Home />} />

                </Route>
            </Routes>


        </>
    )
}

export default RoutesComponent