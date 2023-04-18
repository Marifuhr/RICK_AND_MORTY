import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ id, name,  species, gender, image, onClose }) {


   return (
      
      <div className={styles.containerCard}>

      <button className={styles.button} onClick={onClose}>X</button>

       <h2 className={styles.infoName}>{name}</h2>

      <Link to={`/detail/${id}`}>
         <img className={styles.image} src={image} alt='Not Found' /> 
   </Link>
         <h2 className={styles.infoCard}>{species}</h2>
         <h2 className={styles.infoCard}>{gender}</h2>
      </div>

   )
}
{/* <div className={styles.card}>
      
        <button className={styles.cardButton} onClick={props.onCloseCard}> X
        </button>
      
      <h3>{props.id}</h3>
      <div className={styles.name}>
        <h2>{props.name}</h2>
      </div>
      <div className={styles.speciesYGenero}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>

      <Link to={`/detail/${id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
    </div>
  );  */}


