import React from 'react';
import AuthService from "../service/AuthService";
import LoggedProfile from "./LoggedProfile";


export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    login = (e) => {
        e.preventDefault();
        const credentials = {username: this.state.username, password: this.state.password};

        AuthService.login(credentials).then(res => {
            if (res.data.status === 200) {
                LoggedProfile.removeRole();
                LoggedProfile.setIdUser(res.data.result.id);
                LoggedProfile.setRoleUser();

                console.log(res.data.result);

                this.setState({message: "successfully logged like user"});
            } else {
                this.setState({message: res.data.message});
            }
        });


    };

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h3 style={styles.center}>Login</h3>
                <div>
                    <label htmlFor="login-username">Username</label>
                    <input type="text" name="login-username" value={this.state.username}
                           onChange={(evt) => this.onChangeHandler(evt, 'username')}/>
                </div>
                <div>
                    <label htmlFor="login-password">Password</label>
                    <input type="text" name="login-password" value={this.state.password}
                           onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                </div>
                <button /*onClick={this.onButtonLogin}*/ onClick={this.login}>Login</button>
            </React.Fragment>
        )
    }
}

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center'

    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        color: '#dc3545'
    }
}

