import { NavLink } from "react-router-dom";

export default function Menu() {
    const claseActiva = 'active';
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-flid'>
                <NavLink activeClassName={claseActiva}
                    className='navbar-brand'
                    to='/'>React Peliculas</NavLink>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to="/generos"
                                activeClassName={claseActiva}
                                className='nav-link'>
                                Generos
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/actores"
                                activeClassName={claseActiva}
                                className='nav-link'>
                                Actores
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/cines"
                                activeClassName={claseActiva}
                                className='nav-link'>
                                Cines
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/pelicula/filtrar"
                                activeClassName={claseActiva}
                                className='nav-link'>
                                Filtrar Peliculas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}