import React from 'react';

export class AddressOther extends React.Component {

    render() {
        return (
            <ul>
                <li>Phone: {this.props.phone}</li>
                <li>E-mail: {this.props.email}</li>
            </ul>
        )
    }
}