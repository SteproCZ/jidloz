import React from 'react';

export class Food extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.name}<br />
                {this.props.description}<br />
                    {this.props.price}</p>
            </React.Fragment>
        )
    }
}
