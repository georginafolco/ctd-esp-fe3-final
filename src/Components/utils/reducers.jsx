export const useFetch = (state, action) => {
    switch(action.type){
      case 'GET_LIST':
        return {...state, data: action.payload}
      case 'GET_DENTIST':
        return {...state, dentist: action.payload}
      default: 
        throw new Error();
    }
  }

export const useFav = (state, action) => {
  switch(action.type){
    case 'ADD_FAV':
      return [...state, action.payload];
    case 'DELETE_FAV':
      return state.filter(dentist => dentist.id !== action.payload)
    default: 
      throw new Error();
  }
}

export const useTheme = (state, action) => {
  switch(action.type){
    case 'CHANGE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme)
      return {
        theme: newTheme
      }
    default: 
      return state;
  }
}
