import React, {useState} from 'react';
import './App.css';
import {Login} from "./Components/Login";
import {RegistrationUser} from "./Components/RegistrationUser";
import {RegistrationProducer} from "./Components/RegistrationProducer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Navbar} from "./Components/Navbar";
import {FoodListComponent} from "./Components/FoodListComponent";
import {ReservationsComponent} from "./Components/ReservationsComponent";
import {Logout} from "./Components/Logout";
import AuthService from "./service/AuthService";
import {Graph} from "./Components/Graph";


function App() {
    const [loggedIN, setLoggedIN] = useState(AuthService.getUserInfo() !== null);

    return (

        <Router>
            <div className="App">
                <Navbar {...{loggedIN}}/>

                <Switch>
                    <Route exact path="/" component={() => <Graph legendPosition="bottom" category={"Vegetables"}/>}/>

                    <Route path="/about" component={About}/>

                    <Route path="/login" render={(routeProps) => <Login {...{setLoggedIN, ...routeProps}}/>}/>

                    <Route path="/logout" render={(routeProps) => <Logout {...{setLoggedIN, ...routeProps}}/>}/>

                    <Route path="/producer" component={() => <FoodListComponent isUser={false}/>}/>

                    <Route path="/user" component={() => <FoodListComponent isUser={true}/>}/>

                    <Route path="/reservations/user" component={() => <ReservationsComponent isUser={true}/>}/>

                    <Route path="/reservations/producer" component={() => <ReservationsComponent isUser={false}/>}/>

                    <Route path="/registration/user" component={RegistrationUser}/>

                    <Route path="/registration/producer" component={RegistrationProducer}/>
                </Switch>
            </div>
        </Router>
    );
}

function About() {
    return (
        <div className="card p-4">
            <h2 className="h1">About</h2>
            <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
                    commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
            </div>

        </div>
    );
}

export default App;


