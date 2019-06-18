import React, { Component } from 'react';

const companies = [
    { id: '0', cName: 'RL0', cLastDate: '06/16/2019', cLastTime: '10:00AM', priority: '3/5' },
    { id: '1', cName: 'RL1', cLastDate: '06/17/2019', cLastTime: '10:00AM', priority: '2/5' },
    { id: '2', cName: 'RL2', cLastDate: '06/18/2019', cLastTime: '10:00AM', priority: '4/5' }
];

class CompanyRow extends Component {
    render() {
        const company = this.props.company;
        return (
            <tr>
                <td>{company.cName}</td>
                <td>{company.cLastDate}</td>
                <td>{company.cLastTime}</td>
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
                            <th>Last Contacted Date</th>
                            <th>Time</th>
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
