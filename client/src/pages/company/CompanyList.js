import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import CompanyTable from './CompanyTable';

class CompanyList extends Component {
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

    handleDeleteParent(id) {
        axios.get('http://localhost:3000/api/companies/delete/' + id)
            .then(res => {
                console.log('Delete Successful');
                this.loadData();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <CompanyTable companies={this.state.companies} _handleDelete={this.handleDeleteParent.bind(this)} />
            </div>
        );
    }
}

CompanyList.propTypes = {
    companies: PropTypes.array
};

export default CompanyList;

