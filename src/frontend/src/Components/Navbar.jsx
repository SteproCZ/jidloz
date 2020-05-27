import React from "react";
import {Link} from "react-router-dom";
import LoggedProfile from "./LoggedProfile";

export class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav nav-tabs justify-content-center">
                {
                    this.props.loggedIN === false ?
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration/user">Registration</Link>
                            </li>
                        </ul>
                        : (
                            LoggedProfile.isProducer() === true ? //producer

                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/producer">Add product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/user">Just choose</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/reservations/user">My reservations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/reservations/producer">My products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Logout">Logout</Link>
                                    </li>
                                </ul>
                                ://user

                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Logout">Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/registration/producer">Registration like producer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/user">Just choose</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/reservations/user">My reservations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                </ul>
                        )
                }
            </nav>
        )
    }


}
