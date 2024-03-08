import React from 'react';
import style from "../CSS/style.module.css";

function Header(props) {
  return (
    <div className={style.header}>
      <h1>{props.name}</h1>
      <p>{props.f}</p>
    </div>
  );
}

export default Header;