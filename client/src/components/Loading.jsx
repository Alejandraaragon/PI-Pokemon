import React from "react";
import styles from "../css/Loading.module.css";

 

export default class Loading extends React.Component{
    render() {
        return(
            <div className = "loading">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        )
    }
};