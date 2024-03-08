import React from 'react';
import style from '../CSS/style.module.css';

function Content(props) {
    return (
        
        <div className={style.Content}>
        <h1>{props.name}</h1>
        <p>{props.f}Muhamnmad Hamid</p>
        <p>Software engineers apply engineering principles and knowledge of programming 
            languages to build software solutions for end users. Software engineers design and develop computer games, 
            business applications, operating systems, 
            network control systems, and middleware—to name 
            just a few of the many career paths available.</p>
      </div>
    );
}



export default Content;