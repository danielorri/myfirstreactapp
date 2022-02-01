import React from "react";
import './skills.css'

export class Skills extends React.Component {
    render() {
        return (<div className="skills" id={this.props.id}>
            <h1 className="h1-skills">Skills</h1>
            <ul className="ul-skills">
                <li className="li-skills html"></li>
                <li className="li-skills css"></li>
                <li className="li-skills JavaScript"></li>
                <li className="li-skills Bootstrap"></li>
                <li className="li-skills React"></li>
            </ul>
        </div>);
    }
}