import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Personajes from './pages/Personajes';
import Home from './pages/Home';
import Episodios from './pages/Episodios';
import { RutaProtegida } from './componentes/RutaProtegida';
import './App.css';
import { ThemeContext } from './context/ThemeContext.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const titulo = 'Rick and Morty App';

  const navLinks = [
    { id: 1, route: '/home', name: 'Inicio' },
    { id: 2, route: '/episodios', name: 'Episodios' },
    { id: 3, route: '/personajes', name: 'Personajes' },
  ];

  const newUser = {
    id: 12,
    name: 'Pablo',
    roles: ['invitado', 'admin', 'administrator', 'finanzas', 'rrhh',],


  };

  function loguearse() {
    if (!isLogin) {
      setUser(newUser);
      setIsLogin(true);
    } else {
      setUser(null);
      setIsLogin(false);
    }
  }

  const esUserPremium = user?.roles.includes('premium-plus');
  console.log(esUserPremium);


  const [settings, setSetting] = useState(
    {
      header: 'black',
      especie: 'white'
    });


  return (

    <ThemeContext.Provider value={settings}>

      <div style={{ width: '100%' }}>

        <h1>{titulo}</h1>

        <button onClick={loguearse}>
          {isLogin ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>

        <div>{isLogin ? 'LOGUEADO' : 'NO LOGUEADO'}</div>


        <header>
          <nav>
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link to={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/episodios" element={
              <RutaProtegida isAllow={isLogin}>
                <Episodios />
              </RutaProtegida>
            } />
            <Route path="/personajes" element={
              <RutaProtegida isAllow={isLogin}>
                <Personajes />
              </RutaProtegida>
            } />
            <Route path="*" element={<div>404 Pagina No encontrada</div>} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
