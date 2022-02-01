import React from "react";
import './NavBarMenu.css';


export class NavBarMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={display: ''};
        
    }

 
    

    render(){
        return (
            <div className="overlay" style={{display: this.state.display}}>
                <button className="cls-btn" onClick={this.props.onClick}>close</button>
                <ul className="overlay-content">
                    <li><a href="#top" className="a" onClick={this.props.onClick}>Home</a></li>
                    <li><a href="#aboutWork" className="a" onClick={this.props.onClick}>Work</a></li>
                    <li><a href="#skills" className="a" onClick={this.props.onClick}>Skills</a></li>
                    <button className="ctcButton" onClick={this.props.onClick}><a href='#contact'>Contact</a></button>
                </ul>
            </div>
        );
    }
}