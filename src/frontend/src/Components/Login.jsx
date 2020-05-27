import React from 'react';
import AuthService from "../service/AuthService";
import LoggedProfile from "./LoggedProfile";


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            state: ""
        }
    }

    async componentDidMount() {
        await LoggedProfile.clear();
        this.props.setLoggedIN(false);
    }

    login = async (e) => {
        e.preventDefault();

        const credentials = {username: this.state.username, password: this.state.password};

        await AuthService.login(credentials).then(async res => {
            if (res.data.status === 200) {
                await LoggedProfile.login(res.data.result);

                this.props.setLoggedIN(true)

                this.setState({message: "successfully logged like user"});
                this.props.history.push('/');

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
            <div className="d-flex justify-content-center p-5">
                <div className="card m-3">
                    <h3 className="card-header">Login</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" name="login-username" value={this.state.username}
                                   onChange={(evt) => this.onChangeHandler(evt, 'username')}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" name="login-password"
                                   value={this.state.password}
                                   onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

