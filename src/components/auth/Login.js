import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
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
