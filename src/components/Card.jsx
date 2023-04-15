import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
   const { name,  species, gender, image, onClose } = props;

   return (
      <div className={styles.containerCard}>
<button className={styles.button} onClick={onClose}>X</button>
         <h2 className={styles.infoName}>{name}</h2>
         <img className={styles.image} src={image} alt='Not Found' /> 
         <h2 className={styles.infoCard}>{species}</h2>
         <h2 className={styles.infoCard}>{gender}</h2>
      </div>
   );
}
