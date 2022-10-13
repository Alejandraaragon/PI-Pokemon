import {
  GET_POKEMONS,
  SEARCH_POKEMONS,
  ORDER,
  ASCENDENTE,
  DESCENDENTE,
  RESET,
  ATTACK_SORT,
  TYPES_POKEMONS,
  ORDER_TYPE,
  GET_POKEMON_ID,
  CLEAR_DETAIL,
  EXISTING,
  API,
  DB
} from "../../constantes";

const initialState = {
  pokemons: [],
  filtPokemons: [],
  pokeTypes: [],
  pokeDetail: []

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:// obtengo todos los pokemons
      return {
        ...state,
        pokemons: action.payload,
        filtPokemons: action.payload
      }

    case SEARCH_POKEMONS:// busca los pokemons por nombre
      return {
        ...state,
        filtPokemons: action.payload
      }

    case ORDER:// ordena alfabeticamente
      let orderedPok = [ ...state.pokemons ]
      orderedPok = orderedPok.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;//si action.payload es igual a ascendente, devolvememe -1
        }
        if (a.name > b.name) {
          return action.payload === DESCENDENTE ? -1 : 1;
        }
        return 0;
      })
      return {
        ...state,
        filtPokemons: orderedPok
      }

    case RESET:// resetea el filtro y vuelve a mostrar los pokemons
      return {
        ...state,
        filtPokemons: state.pokemons
      }

    case ATTACK_SORT:// ordena el atacke de min a max y de max a min
      let orderedAttack = [...state.pokemons ]
      orderedAttack = orderedAttack.sort((a, b) => {
        if(a.attack < b.attack){
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if(a.attack > b.attack){
          return action.payload === DESCENDENTE ? -1 : 1;
        }
        return 0;
       }) 
       return {
    ...state,
    filtPokemons: orderedAttack
      }

    case TYPES_POKEMONS:// muestra los tipos de pokemons
        return {
        ...state,
        pokeTypes: action.payload
      }

    case ORDER_TYPE:// muestra los pokemons ordenados por tipo
      let orderedTypesPok = [...state.pokemons]
      let filterpokeTypes = orderedTypesPok.filter(e => e.types.includes(action.payload))
        return {
        ...state,
        filtPokemons: filterpokeTypes
      }

    case GET_POKEMON_ID:// obtengo los pokemons por id, esto para entrar al detalle de cada pokemon y ver toda la info
        return {
        ...state,
        pokeDetail: action.payload
      }
    
    case CLEAR_DETAIL:// limpia el detalle de cada pokemon. Esto apra entrar a un pokemon nuevo y que no me muestre el pokemon anterior
      return {
        ...state,
        pokeDetail: action.payload
      }
   
    case EXISTING:
      let totalPoks = {...state.pokemons}
      if(action.payload === API){
        totalPoks = totalPoks.filter(e => !e.createdAtDb)
      }
      else if(action.payload === DB){
        totalPoks = totalPoks.filter(e => e.createdAtDb)
        if(!totalPoks.length){
        return "Not found Pokemon in Data Base"
        }
      }
     return {
      ...state,
      filtPokemons: totalPoks
     }
    default: return state
  }
}

export default rootReducer