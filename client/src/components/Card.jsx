import React from "react";
import styles from "../css/Card.module.css";

 export function Card ({name, img, type}) {
    return(
        <div className={styles.containCard}>
            <br/>
            <div className={styles.containsImg}>
            <img className={styles.imgCard} src={img} alt="pokeImagen" height="250" width="250"/>
            </div>
            <div className={styles.infoCard}>
               <h3>{name}</h3>
               <h4>Type: <br/>{type.map(e => e).join(" - ")}</h4>
            </div>     
        </div>
    )
} 
/*
export default class Card extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            card: this.props.name,
            card2: this.props.img,
            card3: this.props.type

        }
    }
    render() {
        return(
            <div className={styles.containCard}>
            <br/>
            <div className={styles.containsImg}>
            <img className={styles.imgCard} src={img} alt="pokeImagen" height="250" width="250"/>
            </div>
            <div className={styles.infoCard}>
               <h3>{name}</h3>
               <h4>Type: <br/>{type.map(e => e).join(" - ")}</h4>
            </div>     
        </div> 
        )
    }
}*/