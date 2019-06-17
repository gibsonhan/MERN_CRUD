import React, { Component } from "react";
//import { BrowserRoute as Router, Route } from "react-router-dom";
import "./Dashboard.scss";

import Test from "../../components/test/Test";

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
                            <Test />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

/*
<p><Link to="/dashboard/test"> Test </Link></p>
<Router>
    <Route exact path ="/test" component={Test} />
</Router>
<div className="container">
                <div className="row col s12">
                    <div className="col s3">
                        <div className="sidebarNav">
                            <p>New Client</p>
                            <p>Client</p>
                            <p>Database</p>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="col 8" id="dashMain">
                        <Test />
                    </div>
                </div>
            </div>
<----------Notes Things To fix/figure out ---->
[ ] Need to figure out how prevent col 9 from wrapping around col s3 when min
[ ] Figure out the scss/css coloring and stuff

*/
