import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(onSearch) {
   return (
      <div className={`${styles.containerSearch} ${styles.transparencia}`}>
          <input className={styles.input} type='search' />
         <button className={styles.button} onClick={onSearch}>Agregar</button> 
      </div>
   );
}
