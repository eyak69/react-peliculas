import './App.css';
import Menu from './utils/Menu';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import rutas from './router-config';
import configurarValidaciones from './validaciones';

configurarValidaciones();

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
