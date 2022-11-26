import React, { useState } from 'react';
import Icon from '../../components/icon';
import './styles.scss';

export default function UserRegistration() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function submit() {
    console.log('submit!');
    console.log('name', name);
    console.log('lastName', lastName);
    console.log('email', email);
  }

  return (
    <div className="user-registration">
      <div className="content-gral">
        <h2 className="title-page">Form example</h2>
        <div className="content-form">
          <form>
            <div className="line-form">
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Ingresa el nombre"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="line-form">
              <span>Apellido</span>
              <input
                type="text"
                placeholder="Ingresa el apellido"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="line-form">
              <span>E-mail</span>
              <input
                type="email"
                placeholder="nombre@ejemplo.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button type="button" className="btn-gral" onClick={submit}>
              Confirmar
              <Icon code="plus" type="button" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
