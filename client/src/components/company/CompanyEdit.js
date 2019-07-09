import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import axios from 'axios';

class CompanyEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: 'Name Placeholder',
            companyEmail: 'Email Placeholder',
            companyRegion: 'Region Placeholder',
            companyTimezone: 'TimeZone Placeholder',
            companyPoc: 'Poc Placeholder',
            companyPocPhone: 'Poc Phone Placeholder',
            companyNotes: 'Company Placeholder'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillMount() {
        this.loadProfile();
    }

    loadProfile() {
        axios.get('http://localhost:3000/api/companies/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    companyName: res.data.companyName,
                    companyEmail: res.data.companyEmail,
                    companyRegion: res.data.companyRegion,
                    companyTimezone: res.data.companyTimezone,
                    companyPoc: res.data.companyPoc,
                    companyPocPhone: res.data.companyPocPhone,
                    companyNotes: res.data.companyNotes
                });
            });
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleUpdate(e) {
        e.preventDefault();
        const companyObj = {
            companyName: this.state.companyName,
            companyEmail: this.state.companyEmail,
            companyRegion: this.state.companyRegion,
            companyTimezone: this.state.companyTimezone,
            companyPoc: this.state.companyPoc,
            companyPocPhone: this.state.companyPocPhone,
            companyNote: this.state.companyNotes
        };

        axios.put('http://localhost:3000/api/companies/update/' + this.props.match.params.id, companyObj)
            .then(res => console.log("company updated with axios.put", res.data));
    }

    render() {
        return (
            <div className="container">
                <h3>{this.props.match.params.id}</h3>

                <form noValidate onSubmit={this.handleUpdate}>
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
                    /><label htmlFor="companyNotes">Company Notes</label>
                    <div className="buttonWrapper">
                        <button
                            type="submit"
                            value="Update Company"
                        >Update</button>
                        <Link to ="/companies">Cancel</Link>
                    </div>
                </form>
            </div>

        );
    }
}

CompanyEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};

export default CompanyEdit;

