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
import CreateCompany from "../pages/company/CreateCompany";
import ListCompany from "../pages/company/ListCompany";
import EditCompany from "../pages/company/EditCompany";
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
                    <Route exaxt path="/createCompany" component={CreateCompany} />
                    <Route exact path="/listCompany" component={ListCompany} />
                    <Route path="/editCompany/:id" component={EditCompany} />
                    <Route path= "/test" component={Test} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;

