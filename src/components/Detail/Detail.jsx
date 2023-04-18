import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail(props) {
    const navigate = useNavigate()
    const {detailId} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res)=> res.json())
        .then((data)=>{
            data.name ? setCharacter(data) : window.alert("No hay personaje con ese ID")
        })
        .catch((error)=>{
            console.log(error)
            alert("Ups algo fallo")
        })
        },[]);
        
    
    return(
        <div>
            
            <button className={styles.regreso} onClick={() => navigate(-1)}>Regresar</button>
            
            <span className={styles.detail}>
            <h1>Name:  {character.name}</h1>
            <h2>Status:  {character.status}</h2>
            <h2>Specie:  {character.species}</h2>
            <h2>Gender:  {character.gender}</h2>
            <h2>Origin:  {character.origin?.name}</h2>
            </span>
            <>
            <img src={character.image} alt="Not Found"/>
            </>
        </div>
    )
}