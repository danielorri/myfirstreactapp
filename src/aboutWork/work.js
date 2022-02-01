import React from "react";
import './work.css';


export class Work extends React.Component{
    render(){
        return (
            <div className="work" id={this.props.id}>
                <div className="description">
                <h1 className="h1-work">About this Work</h1>
                <p className="p-work"> All the problems I ran into</p>
                <button className="btn-work" disabled>Learn More</button>
                </div>
                <div className="example">
                <div className="example-img">

                </div>
                </div>
            </div>
        );

    }
}
