import React from "react";
import LoggedProfile from "./LoggedProfile";
import AuthService from "../service/AuthService";

export class Logout extends React.Component {
    async componentDidMount() {
        await AuthService.logOut().then(r => {
            this.props.setLoggedIN(false);
            LoggedProfile.clear();
            this.props.history.push('/login');
        });
    }

    render() {
        return <h2>You have been logged out.</h2>;
    }
}