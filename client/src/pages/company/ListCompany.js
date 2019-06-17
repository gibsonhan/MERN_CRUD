import React, { Component } from 'react';
import axios from 'axios';

class CompanyRow extends Component {
    render() {
        return (
            <tr>
                <td>Coffee and Tea Trading Co</td>
                <td>6/19/20</td>
                <td>2/5</td>
                <td><button>Edit</button></td>
                <td><button>Archive</button></td>
            </tr>
        );
    }
}

class ListCompany extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/companies')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="listNav">
                    <p>SearchNav PlaceHolder</p>
                </div>
                <div className="companyList-wrapper">
                    <table className="borded-table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Last Contacted</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RL Electronics</td>
                                <td>06/18/2019: 10:00AM</td>
                                <td>4/5</td>
                                <td><button>Edit</button></td>
                                <td><button>Archive</button></td>
                            </tr>
                            <CompanyRow />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCompany;
