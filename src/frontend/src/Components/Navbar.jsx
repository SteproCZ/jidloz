import React from "react";
import {Link} from "react-router-dom";

export class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/producer">Producer</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>


                <ul>
                    <li><Link className="nav-link" to="/edit">Edit</Link></li>
                    <li><Link className="nav-link" to="/logout">Logout</Link></li>
                </ul>

            </nav>
        )
    }


}
