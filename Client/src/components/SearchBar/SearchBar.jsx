import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
<<<<<<< HEAD
   //console.log(props) // {onSearch: fn()}
=======
   //console.log(props)

>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) => {
      const {value} = event.target
      setCharacter(value)
   }
   return (
      <div className={styles.container}>
         <input type='search' onChange={handleInputChange}/>
      <button onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
   );
}
