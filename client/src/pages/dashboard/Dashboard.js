import React, { Component } from "react";
//import { BrowserRoute as Router, Route } from "react-router-dom";
import "./Dashboard.scss";

import Test from "../../components/test/Test";

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        <div className="column">
                            <p>New Client</p>
                            <p>Client</p>
                            <p>Database</p>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="col 9">
                        <Test />
                    </div>
                </div>
                <div className="col s12" id="footer">
                    <p> Footer Place</p>
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

<----------Notes Things To fix/figure out ---->
[ ] Need to figure out how prevent col 9 from wrapping around col s3 when min
[ ] Figure out the scss/css coloring and stuff

*/
