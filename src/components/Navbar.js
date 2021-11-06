import React from 'react';
import { NavLink } from 'react-router-dom';
import loginLogo from '../login-logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light panel-bg">
      <div className="d-flex container justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="bookstore-CMS">Bookstore CMS</span>
          <ul className="navbar-nav">
            {links.map((link) => (
              <li key={link.id} className="nav-item ps-3">
                <NavLink to={link.path} activeClassName="active-link" className="nav-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <img src={loginLogo} alt="Login" className="login-logo" />
      </div>
    </nav>
  );
};
export default Navbar;
