import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import CompanyRow from './CompanyRow';

const CompanyTable = (props) => {
    const companyRows = props.companies.map(company =>
        <CompanyRow key={company._id} company={company} deleteRow={props.deleteRow}/>);
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
            <Link to ="new-company">Create Company</Link>
        </div>
    );
};

CompanyTable.propTypes = {
    companies: PropTypes.object,
    deleteRow: PropTypes.func
};

export default CompanyTable;
