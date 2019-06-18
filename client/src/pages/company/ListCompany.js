import React, { Component } from 'react';

const companies = [
    { id: '0', cName: 'RL0', cContact: 'John Doe', cEmail: 'JohnDoe@gmail.com', priority: '3/5' },
    { id: '1', cName: 'RL0', cContact: 'John Doe', cEmail: 'JohnDoe@gmail.com', priority: '1/5' },
    { id: '2', cName: 'RL0', cContact: 'John Doe', cEmail: 'JohnDoe@gmail.com', priority: '2/5' },
];

class CompanyRow extends Component {
    render() {
        const company = this.props.company;
        return (
            <tr>
                <td>{company.cName}</td>
                <td>{company.cContact}</td>
                <td>{company.cEmail}</td>
                <td>{company.priority}</td>
                <td><button>Edit</button></td>
                <td><button>Archive</button></td>
            </tr>
        );
    }
}
class CompanyTable extends Component {
    render() {
        const companyRows = this.props.companies
            .map(company => <CompanyRow key={company.id} company={company} />);
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
            companies: companies
        };
    }

    render() {
        return (
            <div className="container">
                <CompanyTable companies={companies} />
            </div>
        );
    }
}

export default ListCompany;
