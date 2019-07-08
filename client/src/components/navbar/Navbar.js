import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from '../../modules/Auth';

function authTokenTrue() {
    return (
        <div>
            <div className="col s1">
                <Link to="/user">Profile</Link>
            </div>
            <div className="col s1">
                <Link to="/" onClick={Auth.deauthenticateUser}>Logout</Link>
            </div>
        </div>
    );
}

function authTokenFalse() {
    return (
        <div>
            <div className = "col s1">
                <Link to="/login"> Login </Link>
            </div>
            <div className="col s1">
                <Link to="/register"> Register </Link>
            </div>
        </div>
    );
}

class Navbar extends Component {
    render() {
        const isAuth = Auth.isUserAuthenticated();
        return (
            <div className="navbar-fixed">
                <nav className="row">
                    <div className="col s10">
                        <Link to="/" style={{ paddingLeft: "10%" }}> Home </Link>
                    </div>
                    {isAuth ? authTokenTrue() : authTokenFalse()}
                </nav>
            </div>
        );
    }
}

export default Navbar;

