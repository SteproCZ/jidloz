import React from 'react';
import PublicService from "../service/PublicService";

export class RegistrationUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: "",
                phone: ""
            }
        }
    }

    onButtonRegistration = () => {
        //UserService.registration()

        PublicService.registrationUser(this.state.user).then(res => {
            if(res.data.status === 200){
                this.props.history.push('/login');
            }else {
                this.setState({message: res.data.message});
            }
        });
        /*
        let url = 'http://localhost:8080/registrationUser';
        FetchUtil.fetchPost(url, JSON.stringify(this.state.user))
            .then(response => response.json())
            .then(
                this.props.history.push('/login')
            );*/
    }

    onChangeHandler = (evt, key)  => {
        this.setState({
            user: {
                ...this.state.user,
                [key]: evt.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Registration User</h3>
                <div>
                    <label htmlFor="user-firstName">First name</label>
                    <input type="text" name="user-firstName" value={this.state.user.firstName}
                           onChange={(evt) => this.onChangeHandler(evt, 'firstName')}/>
                </div>
                <div>
                    <label htmlFor="user-lastName">LastName</label>
                    <input type="text" name="user-lastName" value={this.state.user.lastName}
                           onChange={(evt) => this.onChangeHandler(evt, 'lastName')}/>
                </div>
                <div>
                    <label htmlFor="user-username">Username</label>
                    <input type="text" name="user-username" value={this.state.user.username}
                           onChange={(evt) => this.onChangeHandler(evt, 'username')}/>
                </div>
                <div>
                    <label htmlFor="user-password">Password</label>
                    <input type="password" name="user-password" value={this.state.user.password}
                           onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                </div>
                <div>
                    <label htmlFor="user-email">Email</label>
                    <input type="email" name="user-email" value={this.state.user.email}
                           onChange={(evt) => this.onChangeHandler(evt, 'email')}/>
                </div>
                <div>
                    <label htmlFor="user-phone">Phone</label>
                    <input type="text" name="user-phone" value={this.state.user.phone}
                           onChange={(evt) => this.onChangeHandler(evt, 'phone')}/>
                </div>
                <button onClick={this.onButtonRegistration}>Registration</button>
            </React.Fragment>
        )
    }


}