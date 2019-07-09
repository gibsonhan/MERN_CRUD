import React, { Component } from "react";
import axios from 'axios';
import setAuthtoken from '../../modules/setAuthtoken';
import Auth from '../../modules/Auth';
import "./User.scss";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            message: ''
        };
    }

    componentWillMount() {
        console.log(Auth.getToken());
        axios.get('http://localhost:3000/api/user/auth/secret', setAuthtoken(Auth.getToken()))
            .then(res => {
                console.log(res.data);
                this.setState({ message: res.data });
            })
            .catch(err => console.log('Error Response axios get failed', err));
    }

    render() {
        return (
            <div className="testWrapper" style={{ paddingTop: "10%" }}>
                <h3>Place Holder Test</h3>
                <p>Your token, {this.state.message}</p>
            </div>
        );
    }
}

export default User;
