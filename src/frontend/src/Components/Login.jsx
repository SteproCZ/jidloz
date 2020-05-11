import React from 'react';
import {RadioButtonsLogin} from "./RadioButtonsLogin";
import AuthService from "../service/AuthService";
import UserProfile from "./UserProfile";
import ProducerProfile from "./ProducerProfile";


export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.refRadio = React.createRef();
    }

    login = (e) => {
        e.preventDefault();
        const credentials = {username: this.state.username, password: this.state.password};
        if(this.refRadio.current.getIsUser()){
            AuthService.login(credentials).then(res => {
                if(res.data.status === 200){
                    UserProfile.setUsername(res.data.result.username);
                    UserProfile.setRole("");
                    UserProfile.setId(res.data.result.id);

                    console.log(res.data.result);

                    this.setState({message: "successfully logged like user"});
                }else {
                    this.setState({message: res.data.message});
                }
            });
        }else{
            AuthService.loginProducer(credentials).then(res => {
                if(res.data.status === 200){
                    ProducerProfile.setName(res.data.result.name);
                    ProducerProfile.setRole(res.data.result.role);
                    ProducerProfile.setId(res.data.result.id);

                    console.log(res.data.result);

                    this.setState({message: "successfully logged like producer"});
                }else {
                    this.setState({message: res.data.message});
                }
            });
        }



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
                <div>
                    <RadioButtonsLogin ref={this.refRadio} />
                </div>
                <button /*onClick={this.onButtonLogin}*/ onClick={this.login}>Login</button>
            </React.Fragment>
        )
    }
}

const styles= {
    center :{
        display: 'flex',
        justifyContent: 'center'

    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        color: '#dc3545'
    }
}

