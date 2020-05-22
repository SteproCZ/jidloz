import React from 'react';
import FetchUtil from "./FetchUtil";

export class RegistrationProducer extends React.Component {

    constructor() {
        super();
        this.state = {
            producer: {
                name: "",
                email: "",
                phone:"",
                password: "",
                city: "",
                postalCode:"",
                street: "",
                houseNumber: ""
            }
        }
    }

    onButtonRegistration = () => {
        let url = 'http://localhost:8080/registrationProducer';
        FetchUtil.fetchPost(url, JSON.stringify(this.state.producer))
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }

    onChangeHandler = (evt, key)  => {
        this.setState({
            producer: {
                ...this.state.producer,
                [key]: evt.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Registration Producer</h3>
                <div>
                    <label htmlFor="producer-name">Name producer</label>
                    <input type="text" name="producer-name" value={this.state.producer.name}
                           onChange={(evt) => this.onChangeHandler(evt, 'name')}/>
                </div>
                <div>
                    <label htmlFor="producer-email">e-mail</label>
                    <input type="text" name="producer-email" value={this.state.producer.email}
                           onChange={(evt) => this.onChangeHandler(evt, 'email')}/>
                </div>
                <div>
                    <label htmlFor="user-phone">Phone</label>
                    <input type="text" name="producer-phone" value={this.state.producer.phone}
                           onChange={(evt) => this.onChangeHandler(evt, 'phone')}/>
                </div>
                <div>
                    <label htmlFor="producer-password">Password</label>
                    <input type="password" name="producer-password" value={this.state.producer.password}
                           onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                </div>
                <div>
                    <label htmlFor="producer-city">City</label>
                    <input type="text" name="producer-city" value={this.state.producer.city}
                           onChange={(evt) => this.onChangeHandler(evt, 'city')}/>
                </div>

                <div>
                    <label htmlFor="user-postalCode">Postal code</label>
                    <input type="number" name="producer-postalCode" value={this.state.producer.postalCode}
                           onChange={(evt) => this.onChangeHandler(evt, 'postalCode')}/>
                </div>
                <div>
                    <label htmlFor="producer-street">Street</label>
                    <input type="text" name="producer-street" value={this.state.producer.street}
                           onChange={(evt) => this.onChangeHandler(evt, 'street')}/>
                </div>
                <div>
                    <label htmlFor="producer-houseNumber">House number</label>
                    <input type="number" name="producer-houseNumber" value={this.state.producer.houseNumber}
                           onChange={(evt) => this.onChangeHandler(evt, 'houseNumber')}/>
                </div>
                <button onClick={this.onButtonRegistration}>Registration</button>
            </React.Fragment>
        )
    }


}