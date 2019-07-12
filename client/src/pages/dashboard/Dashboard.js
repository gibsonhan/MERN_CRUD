import React, { Component } from "react";
//import { BrowserRoute as Router, Route } from "react-router-dom";
import "./Dashboard.scss";

import { Link } from 'react-router-dom';

import User from "../../components/user/User";


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="row">
                    <div className="collection col s3">
                        <ul>
                            <li><Link to ="/" className="collection-item"><span className="badge">1</span>Dashboard</Link></li>
                            <li><Link to ="/" className="collection-item"><span className="new badge">1</span>Inventory</Link></li>
                            <li><Link to ="/" className="collection-item"><span className="new badge">4</span>Sales</Link></li>
                            <li><Link to ="/" className="collection-item"><span className="new badge">4</span>Invoices</Link></li>
                            <li><Link to ="/companies" className="collection-item"><span className="new badge">4</span>Companies</Link></li>
                        </ul>
                    </div>
                    <div className="dashboard-main col s9">
                        <div className="container">
                            <User />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

