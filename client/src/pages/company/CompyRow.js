import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CompanyRow extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        axios.get('http://localhost:3000/api/companies/delete/' + this.props.company._id)
            .then(res => {
                console.log('Delete Successful');
            })
            .catch(err => console.log(err));
    }

    render() {
        const company = this.props.company;
        return (
            <tr>
                <td>{company.companyName}</td>
                <td>{company.companyPoc}</td>
                <td>{company.companyEmail}</td>
                <td>{company.companyRegion}</td>
                <td><Link to={"/company/" + company._id}>Edit</Link></td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default CompanyRow;
