import {
    FETCH_DRINKS
  } from '../actions/DrinkActions';
  
  
  export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_DRINKS:
          return {
            ...state,
            drinks: action.payload.data
          }
      default:
        return state;
    }
  };