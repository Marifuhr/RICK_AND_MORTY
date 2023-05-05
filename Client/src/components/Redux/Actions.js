import axios from "axios";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actionsTypes";
const endpoint = "http://localhost:3001/rickandmorty/fav";

//SIN EXPRESS

//  export const addFavorite = (character) => {
//    return {
//     type: ADD_FAVORITE,
//     payload: character }
//  }
//  export const removeFavorite = (id) => {
//    return{
//     type: REMOVE_FAVORITE,
//     payload: id}
//  }
// con async await
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// con async await
export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.remove(`${endpoint}/${id}`);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

 export const filterCards = (gender) => {
   return{
    type: FILTER, 
    payload: gender}
 }
 export const orderCards = (id) => {
   return{
    type: ORDER, 
    payload: id}
 }

// export const ADD_FAVORITE = "ADD_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
// export const FILTER = "FILTER";
// export const ORDER = "ORDER";

// export const addFavorite = (character) =>{
//   return{
//     type: "ADD_FAVORITE",
//     payload: character
//   }
// }

// export const removeFavorite = (id)=>{
//   return{
//     type:"REMOVE_FAVORITE",
//     payload: id
//   }
// }

// export const filterCards = (gender)=>{
//   return{
//     type:"FILTER",
//     payload: gender
//   }
// }

// export const orderCards = (id)=>{
//   return{
//     type: "ORDER",
//     payload: id
//   }
// }