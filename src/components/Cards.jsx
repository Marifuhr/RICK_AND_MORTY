
import Card from './Card';

 export default function Cards(props) {
  const {characters} = props;
   return (
    <div>
       {characters.map(({id, name, species, gender, image})=>(
       <Card 
       id={id}
       key={id}
       name={name}
       species={species}
       gender={gender}
       image={image}
       onclose={()=> props.onClose(id)}
       />
       ))}
    </div>
    )
 }


