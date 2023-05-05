import React, {useState} from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   //console.log(props)

   const [character, setCharacter] = useState("")

   const handleInputChange = (e)=>{
      const {value} = e.target
      setCharacter(value)
   

   }

   const handleAddCharacter = () => {
      props.onSearch(character);
      setCharacter("");
    };

      const handleLogOut = () => {
       props.logOut();
    };
  

   function handleRandomSearch(event) {
      event.preventDefault();
      const maxId = 100;  // El máximo id en tu base de datos
      const randomId = Math.floor(Math.random() * maxId) + 690;  // Genera un número aleatorio entre 1 y maxId
      props.onSearch(randomId);
    }
   


   return (
      <div className={styles.containerSearch}>
          <input className={styles.input} 
          type='search' 
          placeholder="Escribe un ID"
          name="search"
          character=""
          onChange={handleInputChange}
          value={character}
  />
         <button className={styles.button} onClick={handleAddCharacter}>Agregar</button> 
         <button className={styles.aleatorio} onClick={handleRandomSearch}>Aleatorio</button>
         <button className={styles.buttonSalir} onClick={handleLogOut}>Salir</button>
         
        
      </div>
   );
}
