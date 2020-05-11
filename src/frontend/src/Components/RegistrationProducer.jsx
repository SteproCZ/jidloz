import React from 'react';

export class RegistrationProducer extends React.Component {

    constructor() {
        super();
        this.state = {
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

    onButtonRegistration = () => {
        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;
        const password = this.state.password;
        const city = this.state.city;
        const postalCode = this.state.postalCode;
        const street = this.state.street;
        const houseNumber = this.state.houseNumber;
        const producer = {name, email, phone, password, city, postalCode, street, houseNumber};

        console.log(JSON.stringify(producer));
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producer)
        };
        fetch('http://localhost:8080/registrationProducer', requestOptions)
            .then(response => response.json())
            .then(data => {
                //přihlášen...
                console.log(data)
                //profile.setId(data.id);
            });
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h3>Registration Producer</h3>
                <div>
                    <label htmlFor="producer-name">Name producer</label>
                    <input type="text" name="producer-name" value={this.state.name}
                           onChange={(evt) => this.onChangeHandler(evt, 'name')}/>
                </div>
                <div>
                    <label htmlFor="producer-email">e-mail</label>
                    <input type="text" name="producer-email" value={this.state.email}
                           onChange={(evt) => this.onChangeHandler(evt, 'email')}/>
                </div>
                <div>
                    <label htmlFor="user-phone">Phone</label>
                    <input type="text" name="producer-phone" value={this.state.phone}
                           onChange={(evt) => this.onChangeHandler(evt, 'phone')}/>
                </div>
                <div>
                    <label htmlFor="producer-password">Password</label>
                    <input type="password" name="producer-password" value={this.state.password}
                           onChange={(evt) => this.onChangeHandler(evt, 'password')}/>
                </div>
                <div>
                    <label htmlFor="producer-city">City</label>
                    <input type="text" name="producer-city" value={this.state.city}
                           onChange={(evt) => this.onChangeHandler(evt, 'city')}/>
                </div>

                <div>
                    <label htmlFor="user-postalCode">Postal code</label>
                    <input type="number" name="producer-postalCode" value={this.state.postalCode}
                           onChange={(evt) => this.onChangeHandler(evt, 'postalCode')}/>
                </div>
                <div>
                    <label htmlFor="producer-street">Street</label>
                    <input type="text" name="producer-street" value={this.state.street}
                           onChange={(evt) => this.onChangeHandler(evt, 'street')}/>
                </div>
                <div>
                    <label htmlFor="producer-houseNumber">House number</label>
                    <input type="number" name="producer-houseNumber" value={this.state.houseNumber}
                           onChange={(evt) => this.onChangeHandler(evt, 'houseNumber')}/>
                </div>
                <button onClick={this.onButtonRegistration}>Registration</button>
            </React.Fragment>
        )
    }


}