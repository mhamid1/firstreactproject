import React from 'react';
import style from "../CSS/style.module.css";

function Footer(props) {
    return (
        <div className={style.footer}>
      <h1>{props.name}</h1>
      <p>{props.f}</p>
    </div>
    );
}

export default Footer;