import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            isLoading: true,
            password: '',
            password2: '',
            token: '',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSignUpSubmit(e) {
        event.preventDefault();
        const userObject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.setState({
            name: '',
            email: '',
            password: '',
            password2: ''
        });

        axios.post('http://localhost:3000/api/user/register', userObject)
            .then(res => console.log('Sign Up Successful', res))
            .catch(err => {
                this.setState({ errors: err.response.data });
                console.log(this.state.errors);
            });
    }

    render() {
        const { errors } = this.state;

        return (
            <div style={{ marginTop: "7%" }}className="container">
                <div className="col 12">
                    <h6>
                        <b>Register</b> below
                        <p> Already have account? <Link to="/Login"> Login Here </Link></p>
                    </h6>
                    <div className= "column">
                        <form noValidate onSubmit={this.handleSignUpSubmit}>
                            <div className="input-field col s12">
                                <input
                                    id="name"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                                <label htmlFor="name">name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    errors={errors.email}
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                                <label htmlFor="email">email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                                <label htmlFor="password">password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="password2"
                                    type="password"
                                    errors={errors.password2}
                                    onChange={this.handleChange}
                                    value={this.state.password2}
                                />
                                <label htmlFor="password2">confirm password</label>
                            </div>
                            <div className="col s12">
                                <button
                                    type="submit"
                                >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;

