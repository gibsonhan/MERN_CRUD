import React, { Component } from 'react';

class Inventory extends Component {
    render() {
        return (
            <div className="container">
                <p>Inventory Place Holder</p>
                <table className="borded-table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Description</th>
                            <th>Quanity</th>
                            <th>Price></th>
                            <th>Last Sold</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0123</td>
                            <td>Door Alarm</td>
                            <td>100</td>
                            <td>$3.00</td>
                            <td>07/07/19</td>
                            <td>08/08/18</td>
                        </tr>
                    </tbody>
                </table>
                <button> Create Invoice </button>
                <button> Update Inventory</button>
            </div>
        );
    }
}

export default Inventory;
