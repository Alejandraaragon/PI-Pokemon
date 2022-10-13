import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearDetail, getAllPokemons, getTypesPokemons, post} from "../redux/actions/index";
import styles from "../css/CreatePokemons.module.css"; 


const imgValidUrl = (url) => {// esto nos permite validar la url de la imagen que suba el usuario 
    try {
        new URL(url);
    } catch (error) {
        console.log(error);
        return false;
        
    }
    return true;
}


export const validations = (input) => { //validaciones para cada imput del formulario
    let saveErrors = {};
// validaciones name
  if(!input.name){
    saveErrors.name = "Name is required";
  } else if(input.name.lengt < 2){
    saveErrors.name = "Name must have more 2 characters";
  } else if(input.name.length > 20){
    saveErrors.name = "Name must be less than 20 characters";
  } else if(input.name === "number"){
    saveErrors.name = "Invalid data type";
// validaciones Hpoints
  } else if(!input.hpoints){
    saveErrors.hpoints = "Health is a required field";
  }  else if(input.hpoints < 5){
    saveErrors.hpoints = "Invalid value, must be greater than 5";
  } else if(input.hpoints > 100){
    saveErrors.hpoints = "Invalid value, must be less than 100";
// validaciones attack 
  } else if(!input.attack){
  saveErrors.attack = "Attack is a required field";
  } else if(input.attack < 1){
    saveErrors.attack = "Invalid value, must be greater than 1";
  } else if(input.attack > 100){
    saveErrors.attack = "Invalid value, must be less than 100";
// validaciones defense
  } else if(!input.defense){
  saveErrors.defense = "Defense is a required field";
  } else if(input.defense < 1){
    saveErrors.defense = "Invalid value, must be greater than 1";
  } else if(input.defense > 100){
    saveErrors.defense = "Invalid value, must be less than 100";
// validaciones height
  } else if(!input.height){
  saveErrors.height = "Height is a required field";
  } else if(input.height < 1){
    saveErrors.height = "Invalid value, must be greater than 1";
  } else if(input.height > 100){
    saveErrors.height = "Invalid value, must be less than 100";
// validaciones speed
  } else if(!input.speed){
  saveErrors.speed = "Speed is a required field";
  }  else if(input.speed < 1){
    saveErrors.speed = "Invalid value, must be greater than 1";
  } else if(input.speed > 100){
    saveErrors.speed = "Invalid value, must be less than 100";
// validaciones weight   
  } else if(!input.weight){
  saveErrors.weight = "weight is a required field"; 
  }  else if(input.weight < 1){
    saveErrors.weight = "Invalid value, must be greater than 1";
  } else if(input.weight > 100){
    saveErrors.weight = "Invalid value, must be less than 100";
// validaciones image
  } else if(!input.image){
  saveErrors.image = "Image is a required field";
  } else if(!imgValidUrl(input.image)){
    saveErrors.image = "The image URL is required";
  } else if(!input.type[0]){
    saveErrors.type = ""
  } else {
    return saveErrors;
  }
}


export  default function CreatePokemons()  {

const dispatch = useDispatch();

const allPokemons = useSelector((state) => state.pokemons)
const typesPoke = useSelector((state) => state.pokeTypes)

const [error, setError] = useState({})
const [input, setInput] = useState({

    name: "",
    hpoints: "",
    attack: "",
    defense: "",
    speed: "",
    height: "", 
    weight: "",
    type: [],
    image:"",
})
    
 useEffect(() => {
   dispatch(getAllPokemons())
   dispatch(getTypesPokemons())
   return () => {
    dispatch(clearDetail())
   }
 }, [dispatch])  


const handleInputChange = (e) => {//modificacion del input
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setError(                          
    
  validations({
          ...input,
          [e.target.name]: e.target.value,  
      })
  );
}


 const handleCreateSubmit = (e) => {
  e.preventDefault();
  if(!input.name.trim()){// tiene que haber un name
    alert("This Pokemon need name")
  } else if (allPokemons.find( (e) => e.name.toLowerCase() === input.name.toLowerCase())) {
    alert(`The name ${input.name} already exist. Need other name`) //el nombre del pokemon debe ser distinto a los que ya existen
  } else if (!input.hpoints) {
    alert("This Pokemon needs healt-points")// debe tener health points
  }
 }
     function handleCleanTypes(e) { //elimina el poquemon que queremos
      setInput({
          ...input,
          type: input.type.filter(type => type !== e)
      })
  }; 
   
  /* function handleSubmit(e) {
  
        //seguir abajo
    } else if (!input.healthScore || input.healthScore < 1 || input.healthScore > 100) {
        alert("Please insert a valid healthscore")
    } else if (!input.steps) {
        alert("Please insert at least one step")
    } else if (input.diets.length === 0) {
        alert("Please add at least one diet!")
    }
    else { 

}    */
  
return(
    <div>
        <Link to="/home">
            <button className={styles.btnBackHome}>Back</button><br/> 
        </Link>
        <div className={styles.containForm}>
              <form onSubmit={handleCreateSubmit}>
                <h2>CREATE YOUR POKEMON</h2>
            <div>
                <label>Name: </label>
                <input className={error.name && "danger"} type="text" placeholder="name..." value={input.name} name="name" onChange={handleInputChange}></input><br/>
                <p>{error.name}</p>

                <label>HealtP: </label>
                <input className={error.hpoints && "danger"} type="number" placeholder="healt-points..." value={input.hpoints} name="hpoints" onChange={handleInputChange}></input><br/>
                <p>{error.hpoints}</p>

                <label>Attack: </label>
                <input className={error.attack && "danger"} type="number" placeholder="attack..." value={input.attack} name="attack" onChange={handleInputChange}></input><br/>
                <p>{error.attack}</p>

                <label>Defense: </label>
                <input className={error.defense && "danger"} type="number" placeholder="defense..." value={input.defense} name="defense" onChange={handleInputChange}></input><br/>
                <p>{error.defense}</p>

                <label>Speed: </label>
                <input className={error.speed && "danger"} type="number" placeholder="speed..." value={input.speed} name="speed" onChange={handleInputChange}></input><br/>
                <p>{error.speed}</p>

                <label>Height: </label>
                <input className={error.height && "danger"} type="number" placeholder="height..." value={input.height} name="height" onChange={handleInputChange}></input><br/>
                <p>{error.height}</p>

                <label>Weight: </label>
                <input className={error.weight && "danger"} type="number" placeholder="weight..." value={input.weight} name="weight" onChange={handleInputChange}></input><br/>
                <p>{error.weight}</p>
            </div>
            <div>
                <label>Type: </label>
                   <select className={error.type && "danger"} name="type" onChange={handleInputChange}><br/> 
                       <option value="type">Types</option>
                       {
                        typesPoke?.map((e, l) => (
                          <option type="text" key={l} value={e.name}>{e.name}</option>
                        ))
                       }
                   </select>
            </div>
            {/* <div>
              {
                input.type.map(e =>
                  <div key={e.id}>
                      <div>
                        {e}
                      </div>
                        <button className="buttonClean" onClick={handleCleanTypes}>{e}</button>
                  </div>
                )
              }
            </div> */}
            <div>
                <label>Image: </label>
                <input className={error.image && "danger"} type="text"  value={input.image} name="image" onChange={handleInputChange}></input><br/><br/><br/>
                <p>{error.image}</p>
            </div>
               {/*  <button type="submit">Create</button> */}
              
          {
               !error.name &&
               !error.hpoints &&
               !error.attack &&
               !error.defense &&
               !error.speed &&
               !error.height &&
               !error.weight &&
               !error.image ?
                 
               <button type="submit">Create</button> :
               <button disabled type="submit">Create</button>
              }
                                                      
              </form>

              <div>
              {
                input.type.map(e =>
                  <div key={e.id}>
                      <div>
                        {e}
                      </div>
                        <button className="buttonClean" onClick={handleCleanTypes}>{e}</button>
                  </div>
                )
              }
            </div>

        </div>
    </div>
    )
}