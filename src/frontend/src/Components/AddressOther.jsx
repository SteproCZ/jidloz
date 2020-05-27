import React from 'react';

export class AddressOther extends React.Component {

    render() {
        return (
            <p className="form-group text-left">
                Phone: {this.props.phone}<br/>
                E-mail: {this.props.email}
            </p>
        )
    }
}