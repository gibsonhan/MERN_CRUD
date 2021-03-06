import React, { Component } from "react";
//import { BrowserRoute as Router, Route } from "react-router-dom";
import "./Dashboard.scss";

import User from "../../components/user/User";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="row">
                    <div className="sidebarNav col s2">
                        <p>New Client</p>
                        <p>Client</p>
                        <p>Database</p>
                        <p>Settings</p>
                    </div>
                    <div className="dashboard-main col s10">
                        <div className="container">
                            <p>Place Holder</p>
                            <User />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

