import React from "react";
import './Home.css';

export class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <h1 className="name">Victor Daniel <br/> Yanez Escamilla</h1>
                <p className="developer">Self-Taught Web Developer</p>
                <button className="contact"><a href="#contact">Get in Touch</a></button>
            </div>
        );

    }
}