
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Personajes from './pages/Personajes';
import Home from './pages/Home';
import './App.css'
import Episodios from './pages/Episodios';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const titulo = 'Rick and Morty App';

  const navLinks = [
    {
      id: 1,
      route: '/home',
      name: 'Inicio'
    },
    {
      id: 2,
      route: '/episodios',
      name: 'Episodios'
    },
    {
      id: 3,
      route: '/personajes',
      name: 'Personajes'
    },
  ]


  function loguearse() {
    setIsLogin(!isLogin)
  }


  return (
    <div style={{ width: '100%' }}>

      <h1>{titulo}</h1>

      <button onClick={loguearse}> {isLogin !== true ? 'iniciar sesion' : 'cerrar sesion'} </button>

      {
        isLogin === true ? <>LOGUEADO</> : <>NO LOGUEADO</>

      }

      <header>
        <nav>
          <ul>

            {
              navLinks.map((link) =>
                <li key={link.id}>
                  <Link to={link.route}>{link.name}</Link>
                </li>
              )
            }

            {/*         
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/episodios">Episodios</Link>
            </li>
            <li>
              <Link to="/personajes">Personajes</Link>
            </li> */
            }
          </ul>
        </nav>
      </header>

      <div>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/personajes" element={isLogin === true ? <Personajes /> : <Navigate to='/home'></Navigate>} />

          <Route path="/episodios" element={<Episodios />} />

          <Route path="*" element={<div>404 No encontrado</div>} />

        </Routes>
      </div>
    </div>
  );
}

export default App
