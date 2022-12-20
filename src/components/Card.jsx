import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.container}>
        
        <img src={props.src} alt="" />
        <p>{props.name}</p>

    </div>
  )
}

export default Card;