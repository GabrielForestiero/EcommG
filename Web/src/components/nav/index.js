import React, { useCallback } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo_blanco.svg';

export default function Nav({ activeMenu }) {
  const navLinkClass = useCallback((navData) => {
    return navData.isActive ? 'active' : '';
  }, []);

  return (
    <div className={`nav-component ${activeMenu}`}>
      <div className="logo">
        <img alt="" src={logo} />
      </div>
      <ul>
        <li>
          <NavLink to="/" className={navLinkClass}>List</NavLink>
        </li>
        <li>
          <NavLink to="/new" className={navLinkClass}>Form</NavLink>
        </li>
      </ul>
    </div>
  );
}
