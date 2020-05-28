import React from 'react';
import FetchUtil from "./FetchUtil";
import LoggedProfile from "./LoggedProfile";
import * as Constants from "./Constants";

export class RegistrationProducer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            producer: {
                city: "",
                postalCode: "",
                street: "",
                houseNumber: "",
                idUser: 0
            }
        }
    }

    onButtonRegistration = async () => {
        let url = Constants.WEB_ADDRESS+'registrationProducer';

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

    onChangeHandler = (evt, key) => {
        this.setState({
            producer: {
                ...this.state.producer,
                [key]: evt.target.value
            }
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center p-5">
                <div className="card">
                    <h3 className="card-header">Producer registration</h3>
                    <div className="card-body">

                        <div className="form-group">
                            <label>City</label>
                            <input className="form-control" type="text" name="producer-city" value={this.state.producer.city}
                                   onChange={(evt) => this.onChangeHandler(evt, 'city')}/>
                        </div>
                        <div className="form-group">
                            <label>Postal code</label>
                            <input className="form-control" type="number" name="producer-postalCode" value={this.state.producer.postalCode}
                                   onChange={(evt) => this.onChangeHandler(evt, 'postalCode')}/>
                        </div>
                        <div className="form-group">
                            <label>Street</label>
                            <input className="form-control" type="text" name="producer-street" value={this.state.producer.street}
                                   onChange={(evt) => this.onChangeHandler(evt, 'street')}/>
                        </div>
                        <div className="form-group">
                            <label>House number</label>
                            <input className="form-control" type="number" name="producer-houseNumber" value={this.state.producer.houseNumber}
                                   onChange={(evt) => this.onChangeHandler(evt, 'houseNumber')}/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.onButtonRegistration}>Registration</button>
                    </div>
                </div>
            </div>
        )
    }


}