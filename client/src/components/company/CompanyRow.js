import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CompanyRow = (props) => {
    let onclickDelete = () => {
        props.deleteRow(props.company._id);
    };

    const company = props.company;
    return (
        <tr>
            <td>{company.companyName}</td>
            <td>{company.companyPoc}</td>
            <td>{company.companyEmail}</td>
            <td>{company.companyRegion}</td>
            <td><Link to={"/companies/" + company._id}>Edit</Link></td>
            <td><button onClick={onclickDelete}>Delete</button></td>
        </tr>
    );
};

CompanyRow.propTypes = {
    deleteRow: PropTypes.func,
    company: PropTypes.shape({
        _id: PropTypes.string.isRequired
    })
};

export default CompanyRow;
