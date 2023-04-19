import { useState, useEffect } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App() {
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const userName = "mariarosafuhr@gmail.com";
   const password = "mari1234"

   //  const example = {
   //     name: 'Morty Smith',
   //     species: 'Human',
   //     gender: 'Male',
   //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   //  };

   const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((res) => res.json())
         .then((data) => {
            (data.name ? characters.filter((char) => char.id === data.id)
               .length === 0 : "") ? setCharacters([...characters, data]) :
               alert("Personaje ya existe")
         })
         .catch((error) => {
            console.log(error)
         })
   };
   const login = (userData) => {
      if (userData.userName === userName && userData.password === password) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("El usuario o contraseña son incorrectos")
      }
   };

   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id))
      setCharacters(filtered)
   }

   function logOut() {
      access && setAccess(false);
      navigate("/");
   }

   useEffect(()=>{
      !access && navigate("/")

   }, [access, navigate])

   return (
      <div className='App' style={{ padding: "25px" }}>

         {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:detailId" element={<Detail />} />
         </Routes>


      </div>
   );
}

export default App;
