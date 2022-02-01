import React from "react";
import react from "react";
import './contact.css';


export class Contact extends React.Component {

    handleSubmit(){
        return alert(`This form doesn't work at the moment, Sorry for the incovenience :(`);
    }

    render(){
        return (
            <div className="contact-form" id={this.props.id}>
                <h1 className="h1-form">E-mail Me:</h1>
                <p className="p-form">danielorri8321@gmail.com</p>
                <h1 className="h1-form">Get in Touch</h1>
                <form className="ctc-form" action="mailto:danielorri8321@gmail.com">
                    <input name="name" placeholder="Your Name" className="input-form input-1" required></input>
                    <input name="e-mail" placeholder="Your E-mail" className="input-form input-2" required></input>
                    <input name="subject" placeholder="Your Subject"  className="input-form input-3" required></input>
                    <textarea name="name" placeholder="Your Mesasge" className="text-form" required></textarea>
                    <input typeof="submit" value="Send Message" className="btn-work btn-form" onClick={this.handleSubmit}></input>
                </form>
            </div>
        );
    }
}
