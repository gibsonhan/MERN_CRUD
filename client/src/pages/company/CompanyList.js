import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import CompanyTable from './CompanyTable';

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        };
        this.deleteParentMethod = this.deleteParentMethod.bind(this);
    }

    componentDidMount() {
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

    deleteParentMethod(id) {
        axios.get('http://localhost:3000/api/companies/delete/' + id)
            .then(res => {
                console.log('Delete Successful');
            })
            .catch(err => console.log(err));
        this.loadData();
    }

    render() {
        return (
            <div className="container">
                <CompanyTable companies={this.state.companies} deleteRow={this.deleteParentMethod} />
            </div>
        );
    }
}

CompanyList.propTypes = {
    companies: PropTypes.array
};

export default CompanyList;

