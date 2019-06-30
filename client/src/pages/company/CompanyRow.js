import React from 'react';
import { Link } from 'react-router-dom';

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
            <td><Link to={"/company/" + company._id}>Edit</Link></td>
            <td><button onClick={onclickDelete}>Delete</button></td>
        </tr>
    );
};

export default CompanyRow;
