import React, { Component } from 'react';

class CompanyRow extends Component {
    render() {
        return (
            <tr>
                <td>Coffee and Tea Trading Co</td>
                <td>6/19/20</td>
                <td>6:00 PM</td>
                <td>2/5</td>
                <td><button>Edit</button></td>
                <td><button>Archive</button></td>
            </tr>
        );
    }
}
class CompanyTable extends Component {
    render() {
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
                    <tbody>
                        <tr>
                            <td>RL Electronics</td>
                            <td>06/18/2019</td>
                            <td>10:00AM</td>
                            <td>4/5</td>
                            <td><button>Edit</button></td>
                            <td><button>Archive</button></td>
                        </tr>
                        <CompanyRow />
                    </tbody>
                </table>
            </div>
        );
    }
}
class ListCompany extends Component {
    render() {
        return (
            <div className="container">
                <CompanyTable />
            </div>
        );
    }
}

export default ListCompany;
