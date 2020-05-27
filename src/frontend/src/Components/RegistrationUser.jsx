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
            if (res.data.status === 200) {
                this.props.history.push('/login');
            } else {
                this.setState({message: res.data.message});
            }
        });
    }

    onChangeHandler = (evt, key) => {
        this.setState({
            user: {
                ...this.state.user,
                [key]: evt.target.value
            }
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center p-5">
                <div className="card m-2">
                    <h3 className="card-header">Registration</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>First name</label>
                            <input className="form-control" type="text" name="user-firstName" value={this.state.user.firstName}
                                   onChange={(evt) => this.onChangeHandler(evt, 'firstName')}/>
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input className="form-control" type="text" name="user-lastName" value={this.state.user.lastName}
                                   onChange={(evt) => this.onChangeHandler(evt, 'lastName')}/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control"  type="text" name="user-username" value={this.state.user.username}
                                   onChange={(evt) => this.onChangeHandler(evt, 'username')}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control"  type="password" name="user-password" value={this.state.user.password}
                                   onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control"  type="email" name="user-email" value={this.state.user.email}
                                   onChange={(evt) => this.onChangeHandler(evt, 'email')}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control"  type="text" name="user-phone" value={this.state.user.phone}
                                   onChange={(evt) => this.onChangeHandler(evt, 'phone')}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"
                                    onClick={this.onButtonRegistration}>Registration
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}