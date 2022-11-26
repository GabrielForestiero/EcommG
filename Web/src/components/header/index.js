import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import './styles.scss';
import signOut from '../../assets/img/sign_out.svg';
import menuBtn from '../../assets/img/menu.svg';
import dropDown from '../../assets/img/dropdown.svg';
import Nav from '../nav';

export default function Header() {
  const [menuMobile, setMenuMobile] = useState('');
  const { unsetToken, decodedToken } = useAuth();
  const navigate = useNavigate();
  let userEmail = '';
  const tokenData = decodedToken();
  if (tokenData) {
    userEmail = tokenData.email;
  }

  function logout() {
    unsetToken();
    navigate('/login');
  }

  return (
    <div className="header-component">
      <button type="button" className="mobile-btn" onClick={() => setMenuMobile('active')}>
        <img alt="" src={menuBtn} />
      </button>
      <button type="button" className={`mobile-background ${menuMobile}`} onClick={() => setMenuMobile(' ')}> </button>
      <div className="user-name">
        {userEmail}
        <img className="dropdown-icon" alt="" src={dropDown} />
        <div className="dropdown-list">
          <button type="button" className="signout-btn" onClick={() => logout()}>
            Cerrar Sesión
            <img alt="" src={signOut} />
          </button>
        </div>
      </div>
      <Nav activeMenu={menuMobile} />
    </div>
  );
}
