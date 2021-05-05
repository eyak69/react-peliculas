import './App.css';
import Menu from './utils/Menu';
import { Route } from 'react-router-dom';
import IndiceGeneros from './generos/IndiceGeneros';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import rutas from './router-config';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className='container'>
          <switch>
            {rutas.map(ruta =>
              <Route
                key={ruta.path}
                path={ruta.path}
                exact={ruta.exact}>
                <ruta.componente />
              </Route>)}
          </switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
