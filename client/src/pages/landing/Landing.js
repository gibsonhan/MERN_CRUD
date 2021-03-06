import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <Router>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h5>
                                <b>Landing Page</b> with login/auth app with the{" "}
                                <span style={{ fontFamily: "monospace" }}>MERN</span> stack from scratch
                            </h5>
                            <p className="flow-text grey-text text-darken-1">
                                Generic CRM website
                            </p>
                            <br />
                            <div className = "col s12">
                                <Link to="/companies"> Companies </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Landing;
