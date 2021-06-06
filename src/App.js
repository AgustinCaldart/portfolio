import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage.jsx';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import CertsPage from './pages/CertsPage';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/portfolio' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolios' exact>
              <PortfolioPage />
            </Route>
            <Route path='/certificates' exact>
              <CertsPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
