import React from 'react';

export class RegistrationUser extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password:"",
            email: "",
            phone: ""
        }
    }

    onButtonRegistration = () => {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const username = this.state.username;
        const password = this.state.password;
        const email = this.state.email;
        const phone = this.state.phone;

        const user = {firstName, lastName, username, password, email, phone};

        console.log(JSON.stringify(user));
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        };
        fetch('http://localhost:8080/registrationUser', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h3>Registration User</h3>
                <div>
                    <label htmlFor="user-firstName">First name</label>
                    <input type="text" name="user-firstName" value={this.state.firstName}
                           onChange={(evt) => this.onChangeHandler(evt, 'firstName')}/>
                </div>
                <div>
                    <label htmlFor="user-lastName">LastName</label>
                    <input type="text" name="user-lastName" value={this.state.lastName}
                           onChange={(evt) => this.onChangeHandler(evt, 'lastName')}/>
                </div>
                <div>
                    <label htmlFor="user-username">Username</label>
                    <input type="text" name="user-username" value={this.state.username}
                           onChange={(evt) => this.onChangeHandler(evt, 'username')}/>
                </div>
                <div>
                    <label htmlFor="user-password">Password</label>
                    <input type="password" name="user-password" value={this.state.password}
                           onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                </div>
                <div>
                    <label htmlFor="user-email">Email</label>
                    <input type="email" name="user-email" value={this.state.email}
                           onChange={(evt) => this.onChangeHandler(evt, 'email')}/>
                </div>
                <div>
                    <label htmlFor="user-phone">Phone</label>
                    <input type="text" name="user-phone" value={this.state.phone}
                           onChange={(evt) => this.onChangeHandler(evt, 'phone')}/>
                </div>
                <button onClick={this.onButtonRegistration}>Registration</button>
            </React.Fragment>
        )
    }


}