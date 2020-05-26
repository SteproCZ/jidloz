import React from 'react';
import FetchUtil from "./FetchUtil";
import LoggedProfile from "./LoggedProfile";

export class RegistrationProducer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            producer: {
                city: "",
                postalCode:"",
                street: "",
                houseNumber: "",
                idUser: 0
            }
        }
    }

    onButtonRegistration = async () => {
        let url = 'http://localhost:8080/registrationProducer';

        await this.setState({
            producer: {
                ...this.state.producer,
                idUser: LoggedProfile.getIdUser()
            }
        })

        FetchUtil.fetchPost(url, JSON.stringify(this.state.producer))
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });

        this.props.history.push('/login');
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