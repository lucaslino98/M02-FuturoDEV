import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/cabecalho/cabecalho'
import Login from './components/login/login'
import Hero from './components/hero/hero'
import Produtos from './components/produtos/produtos'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Cabecalho} />
          <Route path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
      <Hero/>
      <Produtos/>
    </>
  )
}

export default App
