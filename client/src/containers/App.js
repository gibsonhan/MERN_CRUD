import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

//import { Provider } from "react-redux";
//import store from "../redux/store";

import Dashboard from "../pages/dashboard/Dashboard";
import Landing from "../pages/landing/Landing";
import Login from '../components/auth/Login';
import Navbar from "../components/navbar/Navbar";
import Register from '../components/auth/Register';
import Footer from '../components/footer/Footer';

//import Company Component
import CompanyCreate from "../pages/company/CompanyCreate";
import CompanyList from "../pages/company/CompanyList";
import CompanyEdit from "../pages/company/CompanyEdit";
import Test from "../components/test/Test";

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
                    <Route exaxt path="/newcompany" component={CompanyCreate} />
                    <Route exact path="/companies" component={CompanyList} />
                    <Route path="/company/:id" component={CompanyEdit} />
                    <Route path= "/test" component={Test} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;

