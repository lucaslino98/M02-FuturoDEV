import {BrowserRouter} from 'react-router-dom'

import RoutesComponent from '../src/router/routes'
import { AuthProvider } from "./contexts/auth"
import './App.css'

function App() {
  return (
    <>

      <BrowserRouter>

        <AuthProvider>
          <RoutesComponent />
        </AuthProvider>

      </BrowserRouter>
    </>
  )
}

export default App
