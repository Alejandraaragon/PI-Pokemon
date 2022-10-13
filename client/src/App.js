/* import styles from "./App.module.css"; */
import React from 'react';
import Home from "./components/Home";
import LandingPage from './components/LandingPage';
import Details from "./components/Details";
import CreatePokemons from "./components/CreatePokemons";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    
   
    <div>
      
       <Switch> 
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/pokemon/:id" component={Details}/>
        <Route exact path="/create" component={CreatePokemons}/>
      </Switch> 
    </div>
    
  );
}

export default App;
