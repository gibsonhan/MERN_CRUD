import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.state({ value: event.target.value });
    }

    handleSubmit(e) {
        event.preventDefault();
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="col 12">
                    <h6>
                        <b>Register</b> below
                        <p> Already have account? <Link to="/Login"> Login Here </Link></p>
                    </h6>
                    <div className= "column">
                        <form noValidate onSubmit={this.handleSubmit}>
                            <div className="input-field col s12">
                                <input
                                    id="name"
                                    type="text"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    errors={errors.email}
                                    onChange={this.onChange}
                                    value={this.state.email}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    type="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    id="password2"
                                    type="password"
                                    errors={errors.password2}
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                />
                                <label htmlFor="password2">Confirm Password</label>
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

