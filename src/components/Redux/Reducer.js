import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./Actions";


const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
       allCharacters:[...state.allCharacters, action.payload]
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
       myFavorites: state.myFavorites.filter(favorite => favorite.id !== action.payload)
      };

    case FILTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(favorite => favorite.id === action.payload),
      };


    
    case 'ORDER':
      return {
        ...state,
        allCharacters: state.allCharacters.sort((a,b) => a.id - b.id)
      }

    default:
      return state ;
  }

}

export default rootReducer;