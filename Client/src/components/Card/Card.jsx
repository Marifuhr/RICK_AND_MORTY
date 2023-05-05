import React, {useState, useEffect} from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { addFavorite, removeFavorite } from '../Redux/Actions';

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {


const [isFav, setIsFav]= useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id)
    } else {
      setIsFav(true);
      addFavorite({id: id, name: name, species: species, gender: gender, image: image});
    }
  }
 //---El useEffect comprueba que la card esté dentro de favoritos------- 
  //---El useEfect actualiza la lista de favorito------------------------
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);


   return (
      
      <div className={styles.containerCard}>
        <button className={styles.button} onClick={onClose}>X</button>

           {
           isFav ? (
        <button className={styles.corazon} onClick={handleFavorite}>❤️
        </button>
      ) : (
        <button className={styles.corazon} onClick={handleFavorite}>🤍
        </button>
      )}
       {isFav ? null : (
         <button onClick={onClose} className={styles.button}>
           X
         </button>
       )}
      
      {/* !props.isFavorite && (<button className={styles.buttonCard} onClick={props.onClose}> X </button>) */}
     

       <h2 className={styles.infoName}>{name}</h2>

      <Link to={`/detail/${id}`}>
         <img className={styles.image} src={image} alt='Not Found' /> 
   </Link>
         <h2 className={styles.infoCard}>{species}</h2>
         <h2 className={styles.infoCard}>{gender}</h2>
      
      </div>

   )
}
//----myFavorites ya es una parte de las props
function mapStateToProps(state) {
  return{
    myFavorites: state.myFavorites
  }
}
function mapDispatchToProps(dispatch){
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character))
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Card); //mapDispatchToProps se usa porque no se quiere traer el estado global, ya eur no se necesita



