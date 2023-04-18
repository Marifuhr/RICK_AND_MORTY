import { useState } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'



function App() {
    const [ characters, setCharacters ] = useState([])

   //  const example = {
   //     name: 'Morty Smith',
   //     species: 'Human',
   //     gender: 'Male',
   //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   //  };
      
   const onSearch = (id)=> {
     fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((res)=>res.json())
     .then((data)=>{
         (data.name  ? characters.filter((char)=> char.id === data.id)
         .length === 0 : "") ? setCharacters([...characters, data]):
         alert("Personaje ya existe")
     })
     .catch((error)=>{
      console.log(error)
     })
   };

   const onClose = (id)=>{
      const filtered = characters.filter((char)=>char.id !== Number(id))
      setCharacters(filtered)
     }
      

   return (
      <div className='App' style={{padding:"25px"}}>
            <Nav onSearch={onSearch}/> 
         <Routes>
            <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:detailId" element={<Detail/>}/>
         </Routes>
         
        
      </div>
   );
}

export default App;
