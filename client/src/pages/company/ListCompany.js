import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import CompanyTable from './CompanyTable';

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
            .then(res => {
                console.log("Get list of companies successful", res.data);
                this.setState({ companies: res.data });
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

ListCompany.propTypes = {
    companies: PropTypes.array
};

export default ListCompany;

