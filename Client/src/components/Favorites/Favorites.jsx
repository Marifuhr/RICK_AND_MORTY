<<<<<<< HEAD
import { connect } from "react-redux";
import Card from "../card/Card";
import { Div } from "../assets/styledComponents";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../reducer/actions";

function Favorites({ myFavorites }) {
  // const [aux, setAux] = useState(false)
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        // setAux(!aux)
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));

      default:
        break;
    }
  };
  return (
    <div>
      <div style={{marginBottom: "20px"}}>
        <select name="order" onChange={handleClick}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name="filter"
          onChange={(e) => {
            dispatch(filterCards(e.target.value));
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknow">unknow</option>
        </select>
      </div>
      <Div>
        {myFavorites?.map(({ id, name, species, image, gender }) => (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
          />
        ))}
      </Div>
    </div>
  );
}

=======
import { connect } from "react-redux"
import { useDispatch} from "react-redux"
import Card from '../Card/Card'
import styles from './Favorites.module.css'
import {filterCards, orderCards} from "../Redux/Actions"

 const Favorites = ({myFavorites})=> {
    
   const dispatch = useDispatch();
   const handleClick = (e) => {
     const { name, value } = e.target;
     switch (name) {
       case "order":
         return dispatch(orderCards(value));
       case "filter":
         return dispatch(filterCards(value));
       default:
         break;
     }
   };
     
    // // /*   const filter = useRef(null);
    //     const order = useRef(null); 
          
           const handleReset = () => {
             dispatch({ type: "RESET" });
             document.getElementById("filterSelect").selectedIndex = 0;
             document.getElementById("orderSelect").selectedIndex = 0;
           };
        
           return (
             <div className={styles.background}>
               <div className={styles.containerFav}>
             <div className={styles.Container}>
                   <h1 className={styles.Favoritos}>Favoritos</h1>
        
                   <div className={styles.selectores}>
                     <select name="order" onChange={handleClick}
                     >
                       <option value="Ascendente">Ascendente</option>
                       <option value="Decendente">Descendente</option>
                     </select>
        
                     <select name="filter" onChangeCapture={(e) => {
                       dispatch(filterCards(e.target.value));
                     }}
                     >
                       <option value="Male">Masculino</option>
                       <option value="Female">Femenino</option>
                       <option value="Genderless">Sin Genero</option>
                       <option value="reset">Restablecer</option>
                     </select>
        
                     <button value="reset" onClick={handleReset}>
                   Restablecer
                 </button> 
                   </div>
                 </div>
        
                 <div className={styles.rightContainer}>
                   <div className={styles.containerFavoritos}>
                     {myFavorites?.map(({ id, name, species, image, gender }) => (
                       <Card
                         id={id}
                         key={id}
                         name={name}
                         species={species}
                         image={image}
                         gender={gender}
                       />
                     ))}
       
               </div>
                 </div>
               </div>
             </div>
           );
         }
        
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
<<<<<<< HEAD
=======

export default connect(mapStateToProps, null)(Favorites);
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213

export default connect(mapStateToProps, null)(Favorites);
