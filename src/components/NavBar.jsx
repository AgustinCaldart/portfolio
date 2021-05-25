import React from 'react';
import avatar from '../img/avatar.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={avatar} alt='' />
        </div>

        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/portfolio' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              Sobre Mí
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolios' exact activeClassName='active'>
              Portfolios
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/certificates' exact activeClassName='active'>
              Certificados
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              Contacto
            </NavLink>
          </li>
        </ul>

        <footer className='footer'>
          <p>2021 Argentina</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
