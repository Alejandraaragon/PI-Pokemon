import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom";
import { getDetailPoke, clearDetail } from "../redux/actions/index"
import styles from "../css/Details.module.css";


export default function Details () {
    
    const dispatch = useDispatch()
    const {id} = useParams()
    const pokemonDetail = useSelector((state) => state.pokeDetail)

    useEffect(() => {
        dispatch(getDetailPoke(id))//se monta el componente
        return () => {             //se desmonta el componente
            dispatch(clearDetail())
        }
    }, [dispatch, id])
    
    
    return(
        <div className={styles.containDetails}>
            
            {
              pokemonDetail.length > 0?
              
              <div>
              <h1 className={styles.titleDetail}>DETAIL POKEMON</h1>
              <br/><br/>
            
              <div className={styles.containImage}>
                  <img src={pokemonDetail[0].image} alt="poke-imagen"></img>
              </div>

              <div className={styles.containItems}>
                  <h1 className={styles.nameDetail}>
                      Name: {pokemonDetail[0].name}</h1>
                  <h3>Id: {pokemonDetail[0].id}</h3>
                  <h3>Types: {pokemonDetail[0].types.join(" - ")}</h3>
              </div><br/>

              <div className={styles.containItems}>
                  <h3>CARACTERISTICS:</h3>
                  <div className={styles.itemsDetail}>
                    <h4>Health: {pokemonDetail[0].hpoints}</h4>
                    <h4>Attack: {pokemonDetail[0].attack}</h4>
                    <h4>Defense: {pokemonDetail[0].defense}</h4>
                    <h4>Speed: {pokemonDetail[0].speed}</h4>
                    <h4>Height: {pokemonDetail[0].height}</h4>
                    <h4>Weight: {pokemonDetail[0].weight}</h4>
                  </div><br/>
              </div>

              
              </div>:
              <h1>Loading Details...</h1>
            }
            <Link to="/home">
                <button className={styles.buttonAtHome}>Back</button>
            </Link>

        </div>
    )
}