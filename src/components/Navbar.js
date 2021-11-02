import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="w-100 d-flex align-items-center px-5">
        <span>Bookstore CMS</span>
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link.id} className="nav-item px-3">
              <NavLink to={link.path} activeClassName="active-link" className="nav-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;