import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            pWord: ''
        }
        this.checkAuthenticationData();
    }

    onInputCHangeHandler = (value, id) => {
        this.setState({ [id]: value });
    }

    navigateToDashboard = () => {
        this.props.history.push('/dashboard');
    }

    setAuthenticationData = (data, callbackFn) => {
        const { uName, pWord } = data;
        if (window.sessionStorage) {
            window.sessionStorage.uName = uName;
            window.sessionStorage.pWord = pWord;
            callbackFn();
        }
    }

    checkAuthenticationData = () => {
        if (window.sessionStorage) {
            const { uName = '', pWord = '' } = window.sessionStorage || {};
            if (uName && pWord) {
                this.navigateToDashboard();
            }
        }
    }

    onLoginSubmit = () => {
        const { uName, pWord } = this.state;
        if (uName && pWord) {
            this.setAuthenticationData({ uName, pWord }, this.navigateToDashboard);
        }
    }

    render() {
        const { uName = '', pWord = '' } = this.state;
        return (
            <div className="app-login-comp">
                <h3 className="app-login-comp-head">
                    Login
                </h3>
                <Input
                    type="text"
                    id="uName"
                    placeholder="Email"
                    value={uName}
                    onChangeHandler={this.onInputCHangeHandler}
                />
                <Input
                    type="password"
                    id="pWord"
                    placeholder="Password"
                    value={pWord}
                    onChangeHandler={this.onInputCHangeHandler}
                />
                <Button onClick={this.onLoginSubmit}>
                    Login
                </Button>
            </div>
        )
    }
}

export default withRouter(Login);