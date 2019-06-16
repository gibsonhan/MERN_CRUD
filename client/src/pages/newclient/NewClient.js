import React, { Component } from "react";
import "./NewClient.scss";

class NewClient extends Component {
    constructor() {
        super();
        this.state = {
            companyName: '',
            companyEmail: '',
            companyRegion: '',
            companyTimezone: '',
            companyPoc: '',
            companyPocPhone: '',
            companyNotes: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form noValidate onSubmit={this.handleSubmit}>
                    <input
                        id="companyName"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyName}
                    /><label htmlFor="companyName">Company Name</label>
                    <input
                        id="companyEmail"
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.companyEmail}
                    /><label htmlFor="companyEmail">Company Email</label>
                    <input
                        id="companyRegion"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyRegion}
                    /><label htmlFor="companyRegion">Company Region</label>
                    <input
                        id="companyTimezone"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyTimezone}
                    /><label htmlFor="companyRegion">Company Time Zone</label>
                    <input
                        id="companyPoc"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyPoc}
                    /><label htmlFor="companyRegion">Company Point of Contact</label>
                    <input
                        id="companyPocPhone"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyPocPhone}
                    /><label htmlFor="companyPocPhone">Company Point of Contact Phone</label>
                    <input
                        id="companyNotes"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.companyNotes}
                    /><label htmlFor="companyRegion">Company Notes</label>
                    <div className="newClient-button-wrapper">
                        <button
                            type="submit"
                        >Submit</button>
                        <button
                            type="reset"
                        >Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewClient;
