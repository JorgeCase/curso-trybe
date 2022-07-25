const Redux = require('redux');
/*
// const reducer = (state = { login: false, email: "" }) => {
//     return state;
// };

const fazerLogin = (email) => ({
    type: "LOGIN",
    email});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState());
   */

// Exemplo de uso de vários reducers

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState());