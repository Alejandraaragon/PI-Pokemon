import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { orderAlpha, orderAttack, orderTypes, getPkApi } from "../redux/actions";
import { ASCENDENTE, DESCENDENTE, TYPES_POKEMONS, API, DB } from "../constantes";
import styles from "../css/Filter.module.css";

const Filter = () => {

const dispatch = useDispatch();
const typesPoke = useSelector((state) => state.pokeTypes)



function handleOrder(e){
e.preventDefault();
 dispatch(orderAlpha(e.target.value))
}

function handleAttack(e){
    e.preventDefault();
    dispatch(orderAttack(e.target.value))
}

function handleType(e){
    e.preventDefault();
    dispatch(orderTypes(e.target.value))

}
function handleApiDb(e){
    e.preventDefault();
    dispatch(getPkApi(e.target.value))
}

return (
    <div className={styles.containFilter}>
        <h5>SEARCH AND FILTER POKEMONS:</h5> 
        <div className={styles.containStatusTypes}>
            {/* */}
            <select onChange={handleApiDb}>
                <option hidden>Filter by:</option>
                <option value={API}>Existing</option> 
                <option value={DB}>Created</option> 
            </select>

           {/*  <h5>FILTER BY TYPES</h5>  */}
            <select onChange={handleType}>
                 <option hidden>Type Pokemon</option>
        {
            typesPoke.map(e => {
                return (
                    <option key={e.id} value={e.name}>{e.name.toUpperCase()}</option>
                )
            })
        }
                 <option value={TYPES_POKEMONS}>Type</option>{/* personajes principales */}
            </select>
        </div>

        <div className={styles.containSortAttack}>
         {/* <h5>SORT BY WAY</h5> */}
            <select onChange={handleOrder}>{/* ORDENAMIENTOS */}
                 <option hidden>Alphabetic</option>
                 <option value={ASCENDENTE}>A-Z</option>
                 <option value={DESCENDENTE}>Z-A</option>
            </select>

         {/* <h5>SORT BY ATTACK</h5> */}
            <select onChange={handleAttack}>
                 <option hidden>Attack</option>
                 <option value={ASCENDENTE}>Max Attack</option>
                 <option value={DESCENDENTE}>Min Attack</option>
            </select>
        </div>
    </div>
  )
}
export default Filter;