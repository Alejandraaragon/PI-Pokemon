import React from "react";
import logo from "../imagenes/logoPok.png"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from "../redux/actions";
import styles from "../css/SearchBar.module.css";
import {Link} from "react-router-dom";


export default function SearchBar () {
    
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    
    const handleInputChange = (e) => {//es para que el estado local tome como valor el imput que le mando
        e.preventDefault();
        setInput(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();//input vale pikachu

        dispatch(getPokemonsByName(input))//se despacha getPokemonsByName y recibe el estado que es pikachu
        setInput("")
    }


    return (
        <div className={styles.containsSearch}>
       
            <img className={styles.imgPokemon} src={logo} alt="pokeboall" />
          
            <div className={styles.containsToSearch}>
               <label className={styles.labelSearch}>Search Pokemon: </label>
               <input className={styles.inputSearch}
                   value={input}
                   type="text" 
                   placeholder="Name..." 
                   onChange={handleInputChange}>
               </input>
               <button className={styles.btnSearch} 
                    type="submit" 
                    onClick={handleSubmit}>Search</button>
            </div>
            <div >
               <Link  to="/create"> 
                   <button className={styles.btnCreatePk}>Create Pokemon</button>
               </Link>
            </div>

        </div>
    )
}