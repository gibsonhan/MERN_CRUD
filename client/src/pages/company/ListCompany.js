import React, { Component } from 'react';

class ListCompany extends Component {
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
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCompany;
