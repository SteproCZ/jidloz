import React from 'react';

export class Address extends React.Component {

    render() {
        return (
            <ul>
                <li>City: {this.props.city}</li>
                <li>Postal code: {this.props.postalCode}</li>
                <li>Street: {this.props.street}</li>
                <li>House number: {this.props.houseNumber}</li>
            </ul>
        )
    }
}
