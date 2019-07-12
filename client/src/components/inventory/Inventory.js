import React, { Component } from 'react';

const tempData = [
    { id: '01', productId: '01X2137', quantity: '100', price: '3', lastSold: '07/07/019', lastUpdated: '08/08/19' },
    { id: '02', productId: '01X2136', quantity: '100', price: '2', lastSold: '07/07/019', lastUpdated: '08/08/19' },
    { id: '03', productId: '01X2137', quantity: '100', price: '1', lastSold: '07/07/019', lastUpdated: '08/08/19' },
    { id: '04', productId: '01X2137', quantity: '100', price: '3', lastSold: '07/07/019', lastUpdated: '08/08/19' }
];

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: tempData
        };
    }

    render() {
        return (
            <div className="container">
                <p>Inventory Place Holder</p>
                <table className="borded-table">
                    <InventoryTable inventory={this.state.inventory} />
                </table>
                <button> Create Invoice </button>
                <button> Update Inventory</button>
            </div>
        );
    }
}

const InventoryTable = (props) => {
    const inventoryRow = props.inventory
        .map(inventory => <InventoryRow keys={inventory.id} inventory={inventory} />);
    return (
        <>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Description</th>
                <th>Quanity</th>
                <th>Price</th>
                <th>Last Sold</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            {inventoryRow}
        </tbody>
        </>
    );
};

const InventoryRow = (props) => {
    const inventory = props.inventory;
    return (
        <tr>
            <td>{inventory.productId}</td>
            <td>{inventory.price}</td>
            <td>{inventory.quantity}</td>
            <td>{inventory.price}</td>
            <td>{inventory.lastSold}</td>
            <td>{inventory.lastUpdated}</td>
        </tr>
    );
};


export default Inventory;
