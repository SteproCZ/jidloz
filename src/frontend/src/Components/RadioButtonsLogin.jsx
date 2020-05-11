import React from 'react';


export class RadioButtonsLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            isUser: true
        }
    }

    getIsUser = () => {
        return this.state.isUser;
    }

    onButtonLoginUser = () => {
        this.setState({
            isUser: true
        })
    }

    onButtonLoginProducer = () => {
        this.setState({
            isUser: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <input type="radio" key="user" onClick={() => this.onButtonLoginUser()} name="login" value="user" defaultChecked />
                <label htmlFor="user">User</label>
                <input type="radio" key="producer" onClick={() => this.onButtonLoginProducer()} name="login" value="producer"/>
                <label htmlFor="producer">Producer</label>
            </React.Fragment>
        )
    }
}

