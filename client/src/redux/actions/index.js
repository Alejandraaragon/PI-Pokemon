import axios from "axios";

import { GET_POKEMONS,
         SEARCH_POKEMONS,
         ORDER,
         RESET, 
         ATTACK_SORT,
         TYPES_POKEMONS,
         ORDER_TYPE,
         GET_POKEMON_ID,
         CLEAR_DETAIL,
         EXISTING
        
       } from "../../constantes";

export const getAllPokemons = () => {
   return async function (dispatch){
    let info = await axios.get("http://localhost:3001/pokemons")
      return dispatch ({
        type: GET_POKEMONS,
        payload: info.data
      })
   }
}  

export const getPokemonsByName = (name) => {
  return async function (dispatch){
    let info = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
    return dispatch ({
      type: SEARCH_POKEMONS,
      payload: info.data
    })
  }
}

export const getTypesPokemons = () => {
  return async function (dispatch) {
    let info = await axios.get("http://localhost:3001/types")
    return dispatch({
      type: TYPES_POKEMONS,
      payload: info.data
    })
  }
}
 export const getDetailPoke = (id) => {
  return async function (dispatch) {
    let info = await axios.get(`http://localhost:3001/pokemons/${id}`)
    return dispatch({
      type: GET_POKEMON_ID,
      payload: info.data
    })
  }
} 

export const postPokemon = (payload) => {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/pokemons", payload)  
    return info
  }
}
 

export const orderAlpha = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}

export const  resetPoke = () => {
  return {
    type: RESET
  }
}

export const orderAttack = (value) => {
  return {
    type: ATTACK_SORT,
    payload: value
  }
}


export const orderTypes = (value) =>{
  return{
    type: ORDER_TYPE,
    payload: value
  }
}

export const clearDetail = () => {
  return{
    type: CLEAR_DETAIL,
    payload: []
  }
}

export const getPkApi = (value) => {
  return{
    type: EXISTING,
    payload: value
  }
}

//PROMESAS: 

//

