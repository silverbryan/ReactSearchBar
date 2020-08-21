import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="content-logo">
            <a href="http://" className="nav-link">
              <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.9.1/mercadolibre/logo__small.png" alt="mercadolibre" />
              <span>Developer Mercadolibre</span>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="https://github.com/silverbryan/ReactSearchBar" className="nav-link" target="_black">About Proyect</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;