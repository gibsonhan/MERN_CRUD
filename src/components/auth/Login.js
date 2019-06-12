import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        event.preventDefault();
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
                                error={errors.email}
                                onChange={this.onChange}
                                value={this.state.username}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                error={errors.password}
                                onChange={this.onChange}
                                value={this.state.password}
                                id="password"
                                type="password">
                            >
                            </input>
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
