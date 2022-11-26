import React from 'react';
import './styles.scss';
import Icon from '../../components/icon';

export default function ListExample() {
  function renderTable() {
    const items = [];

    for (let i = 0; i <= 8; i++) {
      items.push((
        <tr key={`item-${i}`}>
          <td>Nombre</td>
          <td>lorem@lorem.com</td>
          <td><Icon link="/new" code="edit" type="table-button" /></td>
          <td><Icon link="/new" code="delete" type="table-button" /></td>
        </tr>
      ));
    }

    return items;
  }

  return (
    <div className="home-page">
      <div className="content-gral">
        <h2 className="title-page">List example</h2>
        <div className="table-container">
          <div className="scrolleable">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th className="small">Editar</th>
                  <th className="small">Borrar</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
