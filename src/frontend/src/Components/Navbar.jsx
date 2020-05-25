import React from "react";
import {Link} from "react-router-dom";
import LoggedProfile from "./LoggedProfile";
import AuthService from "../service/AuthService";

export class Navbar extends React.Component {


    render() {
        return (
            <nav>
                {
                    this.props.loggedIN === false ?
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                            <li>
                                <Link to="/registration/user">Registration</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        : (
                            LoggedProfile.isProducer() === true ? //producer

                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Logout">Logout</Link>
                                    </li>
                                    <li>
                                        <Link to="/producer">Add product</Link>
                                    </li>
                                    <li>
                                        <Link to="/user">Just choose</Link>
                                    </li>
                                    <li>
                                        <Link to="/reservations/Producer">My reservations</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                                ://user

                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Logout">Logout</Link>
                                    </li>
                                    <li>
                                        <Link to="/registration/producer">Registration like producer</Link>
                                    </li>
                                    <li>
                                        <Link to="/user">Just choose</Link>
                                    </li>
                                    <li>
                                        <Link to="/reservations/User">My reservations</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                        )
                }
            </nav>
        )
    }


}
