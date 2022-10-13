import React from "react";
import { getAllPokemons, getTypesPokemons, resetPoke, } from "../redux/actions/index";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {Card} from "./Card";
import Paginado from "./Paginado";
import Filter from "./Filter";
import styles from "../css/Home.module.css";
/* import pikachu from "../imagenes/pikachu.jpg" */


export default function Home () {
    
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.filtPokemons)
    const pokeAll = useSelector((state) => state.pokemons)
    

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(12);
    const iOLastPokemon = currentPage * pokemonPerPage; //1*12=12 el ultimo pokemon 
    const iOFirstPokemon = iOLastPokemon - pokemonPerPage;// 12-12=0 el pok de la posicion 0 seria el primero --- o 24-12=12 el pok de la posicion 12 es el pok 13 que será el primero de la pagina 2
    const currentPokemons = allPokemons.slice(iOFirstPokemon, iOLastPokemon)//corta del primer indice al ultimo que le pasamos, osea del 0-11
   
    /* Pagina 1:                       Pagina 2:
    - Posicion 0 pokemon 1          - Posicion 12 pokemon 13
    - Posicion 1 pokemon 2          - Posicion 13 pokemon 14
    - Posicion 2 pokemon 3          - Posicion 14 pokemon 15
    - Posicion 3 pokemon 4          - Posicion 15 pokemon 16
    - Posicion 4 pokemon 5          - Posicion 16 pokemon 17
    - Posicion 5 pokemon 6          - Posicion 17 pokemon 18
    - Posicion 6 pokemon 7          - Posicion 18 pokemon 19
    - Posicion 7 pokemon 8          - Posicion 19 pokemon 20    
    - Posicion 8 pokemon 9          - Posicion 20 pokemon 21
    - Posicion 9 pokemon 10         - Posicion 21 pokemon 22
    - Posicion 10 pokemon 11        - Posicion 22 pokemon 23   
    - Posicion 11 pokemon 12        - Posicion 23 pokemon 24
    */

    
     const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    } 
    
    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypesPokemons())
    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(resetPoke())
    }
    
   
return(
    <div className={styles.containHome}>{
        pokeAll.length > 0?
        <div>
            <SearchBar/>
        <div className={styles.containTitleFilters}>
                <h1> POKEMON APP </h1> 
            <Filter />
                <br/>  
            <button className={styles.btnReset} onClick={handleClick}>RESET POKEMONS</button>
        </div> 
        
            <> 
            <div className={styles.containCard}>
            {currentPokemons.length > 0 ? currentPokemons.map((e, l) => {
            return(
                <Link to={`/pokemon/${e.id}`}  key={l}>
                  
            <div >
                <Card 
                   img={e.image}
                   name={e.name}
                   type={e.types}
                />
            </div>
               </Link>
            )
            
          }): <div>
            <h1>POKEMON NOT FOUND</h1>
          {/*   <img src={pikachu} alt="pikachu" /> */}
          </div>
          }  </div>    
          <div className={styles.containPaginado}>
        <Paginado
        pokemonPerPage={pokemonPerPage}
        allPokemons={allPokemons.length}
        paginado = {paginado}/> 
        </div>
    </>
        
        </div>:
              <div className={styles.Loading}>
                <h1>Loading...</h1>
                
              </div> 
         }
    </div>
    )
}