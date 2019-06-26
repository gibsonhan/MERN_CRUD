import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CompanyRow from './CompanyRow';

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
                <Link to ="newcompany">Create Company</Link>
            </div>
        );
    }
}

export default CompanyTable;
