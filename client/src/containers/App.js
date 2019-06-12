import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

//import { Provider } from "react-redux";
//import store from "../redux/store";

//import Dashboard from "../pages/dashboard/Dashboard";
import Landing from "../pages/landing/Landing";
import Login from '../components/auth/Login';
import Navbar from "../components/navbar/Navbar";
import Register from '../components/auth/Register';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>
            </Router>
        );
    }
}

export default App;

