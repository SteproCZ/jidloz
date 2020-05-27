import React from 'react';
import {Food} from "./Food";
import {Address} from "./Address";
import {AddressOther} from "./AddressOther";

export class ReservationComponent extends React.Component {
    render() {
        return (
                this.props.reservations.map((value, index) =>
                    <div className="card m-3" key={index}>
                        <div className="card-body" key={index}>

                            <Food name={value.name} description={value.description} price={value.price}/>
                            {this.props.isUser === true ?
                                <React.Fragment>
                                    <Address city={value.city}
                                             postalCode={value.postalCode}
                                             street={value.street}
                                             houseNumber={value.houseNumber}/>
                                    <AddressOther phone={value.phone}
                                                  email={value.email}/>
                                    <button className="btn btn-danger btn-block" onClick={() => this.props.onClickCancel(index)}>Cancel</button>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <AddressOther phone={value.phone}
                                                  email={value.email}/>
                                    <button className="btn btn-primary btn-block" onClick={() => this.props.onClickDone(index)}>Done</button>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                )
        )
    }
}
