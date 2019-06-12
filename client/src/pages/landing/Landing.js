import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <Router>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Landing Page</b> with login/auth app with the{" "}
                                <span style={{ fontFamily: "monospace" }}>MERN</span> stack from scratch
                            </h4>
                            <p className="flow-text grey-text text-darken-1">
                                Generic CRM website
                            </p>
                            <br />
                            <div className="col s6">
                                <Link to="/login"> Login </Link>
                            </div>
                            <div className="col s6">
                                <Link to="/register"> Register </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Landing;
