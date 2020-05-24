import React from 'react';
import {Food} from "./Food";
import {Address} from "./Address";
import {AddressOther} from "./AddressOther";

export class ReservationComponent extends React.Component {
    render() {
        return (
            this.props.reservations.map((value, index) =>

                <div key={index}>

                    <Food name={value.name} description={value.description} price={value.price}/>
                    {this.props.isUser === true ?
                        <React.Fragment>
                            <Address city={value.city}
                                     postalCode={value.postalCode}
                                     street={value.street}
                                     houseNumber={value.houseNumber}/>
                            <button onClick={() => this.props.onClickCancel(index)}>Cancel</button>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <AddressOther phone={value.phone}
                                          email={value.email}/>
                            <button onClick={() => this.props.onClickDone()}>Done</button>
                        </React.Fragment>
                    }
                </div>
            )
        )


    }
}
