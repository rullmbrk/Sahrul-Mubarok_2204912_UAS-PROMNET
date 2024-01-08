import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './health-logo.png';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <div>
            <img src={logo} alt="Logo Kesehatan" height="30" className="mr-2" />
            <a href="/users" className="navbar-brand">
              Puskesmas Al Mubarok
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
