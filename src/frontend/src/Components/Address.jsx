import React from 'react';

export class Address extends React.Component {

    render() {
        return (
            <p className="form-group text-left">
                City: {this.props.city}<br/>
                Postal code: {this.props.postalCode}<br/>
                Street: {this.props.street}<br/>
                House number: {this.props.houseNumber}
            </p>
        )
    }
}
