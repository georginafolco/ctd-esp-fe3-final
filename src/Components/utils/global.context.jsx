import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import { useFetch, useFav, useTheme } from './reducers';

const ContextGlobal = createContext();

const fetch = { data: [], dentist: {} }

const favs = JSON.parse(localStorage.getItem('favs')) || [];

const theme = localStorage.getItem('theme') || 'light';
const initialThemeState = { theme };

export const ContextProvider = ({ children }) => {
  //***** Fetch Dentist Data From API *****//
  const [dentistState, dentistDispatch] = useReducer(useFetch, fetch);

  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(url)
    .then(res => dentistDispatch({type: 'GET_LIST', payload: res.data}))
    .catch(err => console.log(err))
  }, [])

  //***** Favs *****//
  const [favState, favDispatch] = useReducer(useFav, favs);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])
 
  //***** Theme *****//
  const [themeState, themeDispatch] = useReducer(useTheme, initialThemeState);


  return (
    <ContextGlobal.Provider value={{
      dentistState, dentistDispatch,
      favState, favDispatch,
      themeState, themeDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistState = () => useContext(ContextGlobal)
