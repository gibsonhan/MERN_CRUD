import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

//import { Provider } from "react-redux";
//import store from "../redux/store";

import Dashboard from "../pages/dashboard/Dashboard";
import Landing from "../pages/landing/Landing";
import Login from '../components/login/Login';
import Navbar from "../components/navbar/Navbar";
import Register from '../components/register/Register';
import Footer from '../components/footer/Footer';

//import Company Component
import CompanyCreate from "../components/company/CompanyCreate";
import CompanyList from "../components/company/CompanyList";
import CompanyEdit from "../components/company/CompanyEdit";
import User from "../components/user/User";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exaxt path="/new-company" component={CompanyCreate} />
                    <Route exact path="/companies" component={CompanyList} />
                    <Route path="/companies/:id" component={CompanyEdit} />
                    <Route path= "/user" component={User} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;

