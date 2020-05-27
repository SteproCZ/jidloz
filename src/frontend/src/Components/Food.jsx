import React from 'react';

export class Food extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="form-control">{this.props.name}</p>
                <p className="form-control">{this.props.description}</p>
                <p className="form-control">{this.props.price} Kč</p>
            </React.Fragment>
        )
    }
}
