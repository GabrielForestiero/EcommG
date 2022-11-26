import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logo_negro.svg';
import { login as loginService } from '../../services/authentication';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error al ingresar');
  const navigate = useNavigate();

  function renderMsgError() {
    if (error) {
      return (
        <p className="error-txt">{`${errorMessage}.`}</p>
      );
    }
    return null;
  }

  function errorStyle() {
    if (error) {
      return ('error');
    }
    return ('');
  }
  function login(e) {
    e.preventDefault();
    setError(false);
    if (!email || email === '' || !password || password === '') {
      setError(true);
      setErrorMessage('Debe completar todos los campos');
      return null;
    }
    return loginService(email, password)
      .then((resp) => {
        if (resp && resp.error && resp.error.status !== 200) {
          setError(true);
          if (resp.error.data.code === 'missing_params') {
            setErrorMessage('Debe completar todos los campos');
          }
          if (resp.error.data.code === 'authentication_failed') {
            setErrorMessage('Error email o contraseña son invalidos');
          }
          return null;
        }
        setEmail('');
        setPassword('');
        return navigate('/');
      });
  }
  return (
    <div className="login-page">
      <div className="login-side">
        <form className={`login-box ${errorStyle()}`} onSubmit={login}>
          <div className="brand">
            <img alt="" src={logo} />
          </div>
          <div className="line-form">
            <span>E-mail</span>
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="line-form">
            <span>Contraseña</span>
            <input
              type="password"
              autoComplete="new-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {renderMsgError()}
          <button type="submit" className="btn-gral">Iniciar sesión</button>
        </form>
      </div>
      <div className="lateral" />
    </div>
  );
}
