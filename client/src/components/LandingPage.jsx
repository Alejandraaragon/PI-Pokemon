import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/LandingPage.module.css";
import imgLp from "../imagenes/pikachu-blanco.jpg";


export default function LandingPage (){
   
return (
    <div className={styles.ContenedorLanding}>
        <div>
         <img className={styles.imageLanding}src={imgLp} alt="imagen-pikachu"/>
            <div>
               <h1 className={styles.TittleLanding}>POKEMON APP</h1>
            </div>
            <div>
              <p className={styles.TextLanding}>Welcome to POKEMON APP. This application allows you <br/>
               to see several pokemons with detailed information of <br/>
               each one and you can also create your own pokemons. <br/>
               Enter now and have fun!
               </p>
            </div> 
            <div>
            <Link to="/home">
               <button className={styles.ButtonLanding}>GO</button>
            </Link>
            </div>
         </div>
        
    </div>
 )
}