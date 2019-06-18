import React, { Component } from 'react';
import axios from 'axios';

class CompanyRow extends Component {
    render() {
        const company = this.props.company;
        return (
            <tr>
                <td>{company.companyName}</td>
                <td>{company.companyContact}</td>
                <td>{company.companyEmail}</td>
                <td>{company.companyRegion}</td>
                <td><button>Edit</button></td>
                <td><button>Archive</button></td>
            </tr>
        );
    }
}
class CompanyTable extends Component {
    render() {
        const companyRows = this.props.companies
            .map(company => <CompanyRow key={company._id} company={company} />);
        return (
            <div>
                <table className="borded-table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Priority</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>{companyRows}</tbody>
                </table>
            </div>
        );
    }
}
class ListCompany extends Component {
    constructor() {
        super();
        this.state = {
            companies: []
        };
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        axios.get('http://localhost:3000/api/companies')
            .then(response => {
                console.log(response.data);
                this.setState({ companies: response.data });
            })
            .catch(error => error);
    }

    render() {
        return (
            <div className="container">
                <CompanyTable companies={this.state.companies} />
            </div>
        );
    }
}

export default ListCompany;
