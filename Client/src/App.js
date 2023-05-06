<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
 
  /* const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // data --> {}
        const { id } = data;
        const char = characters.find((char) => char.id === id);
        if (id) {
          if (char) return alert("Personaje ya existe");
          setCharacters([...characters, data]);
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  }; */

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const char = characters.find((char) => char.id === id);
      if (id) {
        if (char) return alert("Personaje ya existe");
        setCharacters([...characters, data]);
=======
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
import axios from 'axios';



function App() {
   const navigate = useNavigate();
   const location = useLocation();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(true);
   // const userName = "mariarosafuhr@gmail.com";
   // const password = "mari1234"

   //  const example = {
   //     name: 'Morty Smith',
   //     species: 'Human',
   //     gender: 'Male',
   //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   //  };

   // const onSearch = (id) => {
   //    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          (data.name ? characters.filter((char) => char.id === data.id)
   //             .length === 0 : "") ? setCharacters([...characters, data]) :
   //             alert("Personaje ya existe")
   //       })
   //       .catch((error) => {
   //          console.log(error)
   //       })
   // };

   const onSearch = async (id) => {
      try {
         const { data } = await axios.get(
            `http://localhost:3001/rickandmorty/character/${id}`
         );
         const char = characters.find((char) => char.id === id);
         if (id) {
            if (char) return alert("Personaje ya existe");
            setCharacters([...characters, data]);
         }
      } catch (error) {
         alert(error.message)
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
      }
    } catch (error) {
      alert(error.message)
    }
  };
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

<<<<<<< HEAD
  // Sin Express
  /* const login = (userData) => {
  
    if(userData.userName === userName &&
      userData.password === password) {
        setAccess(true);
        navigate("/home")
      }else{
        alert("Datos incorrectos, por favor verifique")
      }
    setAccess(true);
    navigate("/home");
  }; */
=======
   // const login = (userData) => {
   //    if (userData.userName === userName && userData.password === password) {
   //       setAccess(true);
   //       navigate("/home");
   //    } else {
   //       alert("El usuario o contraseña son incorrectos")
   //    }
   // };

   //CON EXPRESS

   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id))
      setCharacters(filtered)
   }
   const login = async (userData) => {
      
      try {
         const { userName, password } = userData;
         const URL = "http://localhost:3001/rickandmorty/login/";
         const { data } = await axios(`${URL}?email=${userName}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate("/home");
      } catch (error) {
         alert(error.message)
      }
   };

>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213

  // Con Express
  /* function login(userData) {
    const { userName, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(`${URL}?email=${userName}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  } */

<<<<<<< HEAD
  const login = async (userData) => {
    try {
      const { userName, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const {data} = await axios(`${URL}?email=${userName}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert(error.message)
    }
  };

  const logOut = () => {
    access && setAccess(false);
    navigate("/");
  };
=======
   useEffect(() => {
      !access && navigate("/");
   }, [access, navigate]);

>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div
      className="App"
      style={{
        padding: "25px",
      }}
    >
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
