<<<<<<< HEAD
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
=======
import React, {useState, useEffect} from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { addFavorite, removeFavorite } from '../Redux/Actions';

>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
function Card({
  id,
  name,
  species,
<<<<<<< HEAD
  image,
  gender,
  onClose,
  deleteFavorite,
  addFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
=======
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {


const [isFav, setIsFav]= useState(false)
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, name, species, image, gender, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
<<<<<<< HEAD
  }, [id, myFavorites]);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {isFav ? null : (
          <button onClick={onClose} className={styles.button}>
            X
          </button>
        )}
=======
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
      
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
      </div>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Not found" />
          <h2 className={styles.name}>{name}</h2>
        </div>
        <div className={styles.propsContainer}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
