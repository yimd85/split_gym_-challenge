import axios from 'axios';
export const FETCH_DRINKS = 'FETCH_DRINKS';
  
  export const fetchDrinks = () => {
    const url = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    return {
      type: FETCH_DRINKS,
      payload: url
    };
  };