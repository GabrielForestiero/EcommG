import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as btnEdit } from '../../assets/img/icons/edit.svg';
import { ReactComponent as btnDelete } from '../../assets/img/icons/delete.svg';
import { ReactComponent as btnPlus } from '../../assets/img/icons/plus.svg';
import { ReactComponent as btnEye } from '../../assets/img/icons/eye.svg';
import { ReactComponent as btnNoEye } from '../../assets/img/icons/no-eye.svg';

const resources = {
  edit: btnEdit,
  delete: btnDelete,
  plus: btnPlus,
  eye: btnEye,
  'no-eye': btnNoEye,
};

export default function Icon({
  alt,
  link,
  onClick,
  code,
  type,
  fill,
  stroke,
}) {
  if (!resources[code]) {
    return null;
  }
  const Logo = resources[code];
  const className = type || '';
  let fillSelected = fill;
  if (type === 'button' && !fillSelected) {
    fillSelected = 'white';
  }

  const img = (
    <Logo
      alt={alt || code}
      src={resources[code]}
      className={`img ${className}`}
      fill={fillSelected}
      stroke={stroke}
      onClick={onClick}
    />
  );

  if (link) {
    return (
      <Link to={link} className={`link ${className}`}>
        {img}
      </Link>
    );
  }
  return img;
}
