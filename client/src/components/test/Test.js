import React, { Component } from "react";
import axios from 'axios';

import "./test.scss";

class CompanyRow extends Component {
    render() {
        const company = this.props.company;
        return (
            <tr>
                <td>{company.companyName}</td>
                <td>{company.companyPoc}</td>
                <td>{company.companyEmail}</td>
                <td>{company.priority}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
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
            test: []
        };
    }

    async componentWillMount() {
        this.loadData();
    }

    loadData() {
        axios.get('http://localhost:3000/api/companies')
            .then(response => {
                console.log(response);
                const axiosTemp = response.data;
                this.setState({ test: axiosTemp });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="container">
                <CompanyTable companies={this.state.test} />
            </div>
        );
    }
}

class Test extends Component {
    render() {
        return (
            <div className="testWrapper">
                <ListCompany />
            </div>
        );
    }
}

export default Test;
