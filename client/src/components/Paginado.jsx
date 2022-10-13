import React from "react";
import styles from "../css/Paginado.module.css";

const Paginado = ({allPokemons, pokemonPerPage, paginado }) => {
    const pageNumbers = []
                                    //40/12 + 1
    for(let i=1; i<=Math.ceil(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i)
    }
 
 
    return (
        <div className={styles.containPaginado}>
            <nav>
                 <ul>
                    { pageNumbers?.map((e, n) => {
                       return ( 
                        <button key={n} onClick={() => 
                            paginado(e)}>{e}</button>
                       )
                        })
                    }

                 </ul>
           </nav>
       </div>
  )
}
export default Paginado;
/*Recibo:
allPokemons ----> todos los pokemons (40)
pokemonPerPage -> los pokemons que quiero por pagina (12)
paginado -------> la funcion que va a setear*/