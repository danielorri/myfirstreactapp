import React from "react";
import './NavBar.css';
import { NavBarMenu } from "./NavBarMenu/NavBarMenu";

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {display: ''}
        this.handleClick = this.handleClick.bind(this);
        
    }

   
    handleClick(){
        const display = this.state.display;
        const width = window.innerWidth;
        

        if(display === 'block'){
            return this.setState({display: ''});

        }
        this.setState({display: 'block'});
    }

    menuButton() {
        return (<button onClick={this.handleClick} className="menuButton">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </button>);
    }

    render(){
        return (
            <div className="nav">
            <div className="NavBar">
                <p className="logo">1998</p>
                <div className="NavBarMenuButton">
                {this.menuButton()}
                <div className="NavBarMenu" style={{display: this.state.display}}>
                <NavBarMenu onClick={this.handleClick}/>
            </div>
                </div>
            </div>
            </div>
        );
    }
}