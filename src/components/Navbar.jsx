import React from ' react'

const Navbar = () => {
  return (
    <navbar className="navbar navbar-expand">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="http://" className="nav-link">
              <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.9.1/mercadolibre/logo__small.png" alt="mercadolibre"/>
            </a>
          </li>
          <li className="nav-item">
            <a href="http://">About</a>
          </li>
        </ul>
      </div>
    </navbar>
  );
}

export default Navbar;