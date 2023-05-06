<<<<<<< HEAD
import Card from "../card/Card";
import { Div } from "../assets/styledComponents";
export default function Cards(props) {
  const { characters } = props;
  // characters --> [{}], onClose
  return (
    <Div>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onClose(id)}
        />
      ))}
    </Div>
  );
}
=======

import Card from '../Card/Card';
import styles from './Cards.module.css'

 export default function Cards(props) {
  const {characters} = props;
  
   return ( 
       <div className={styles.container}>
         {
   characters.map((char) => (
           <Card
             key={ char.name
   }
             id={
   char.id
   }
             name={
   char.name
   }
             species={char.species}
             gender={char.gender}
             image={char.image}
             onClose={() => props.onClose(
   char.id
   )}
           />
         ))}
       </div>
     ); 
 } 
//    return (
//     <div>
//        {characters.map(({id, name, species, gender, image })=>(
//        <Card 
//        id={id}
//        key={id}
//        name={name}
//        species={species}
//        gender={gender}
//        image={image}
//        onClose={()=> props.onClose(characters.id)}
//        />
//        ))}
//     </div>
//     )
//  }

 
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
