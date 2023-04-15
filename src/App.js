import { useState } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';
import Nav from './components/Nav/Nav';


function App() {
   const [ characters, setCharacters ] = useState([])

   const onSearch = ()=>{
      
   }

   return (
      <div className='App'>
         <Nav />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} />
         {/* <Card
            id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin}
            image={characters.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />  */}
      </div>
   );
}

export default App;
