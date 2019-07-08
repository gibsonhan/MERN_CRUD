import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Auth from "../../modules/Auth";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Login Attempt');
        console.log('Email', this.state.email);
        console.log('password', this.state.password);
        const loginObj = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:3000/api/user/login', loginObj)
            .then(res => {
                //this.setState({ token: res.data.token });
                console.log(res.data);
                console.log(res.data.token);
                Auth.authenticateUser(res.data.token);
                this.props.history.replace('/user');
            })
            .catch(err => console.log(err.response.data));
    }

    render() {
        const { errors } = this.state;

        return (
            <div style={{ marginTop: "5%" }} className="container">
                <div className="col s12">
                    <h5>
                        <b> Login </b> below
                    </h5>
                    <p> Don't have an account? <Link to="/register"> Register Here </Link> </p>
                </div>
                <div className="column">
                    <form noValidate onSubmit={this.handleSubmit}>
                        <div className="input-field col s12">
                            <input
                                autoFocus
                                id="email"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="password"
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                error={errors.password}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12">
                            <button
                                color="blue"
                                type="submit"
                                value="Submit"
                            >
                            Login
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;
