import React, { Component } from 'react';
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
                <td><button>Edit</button></td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
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
                            <th>Region</th>
                            <th>Action</th>
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
