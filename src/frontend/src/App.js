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
                    <Route exact path="/" component={Main}/>

                    <Route path="/about" component={About}/>

                    <Route path="/login" render={(routeProps) => <Login {...{setLoggedIN, ...routeProps}}/>}/>

                    <Route path="/logout" render={(routeProps) => <Logout {...{setLoggedIN, ...routeProps}}/>}/>

                    <Route path="/producer" component={ListFoodProducerFun}/>

                    <Route path="/user" component={ListFoodFun}/>

                    <Route path="/reservations/user" component={ReservationsUserFun}/>

                    <Route path="/reservations/producer" component={ReservationsProducerFun}/>

                    <Route path="/registration/user" component={RegistrationUser}/>

                    <Route path="/registration/producer" component={RegistrationProducer}/>
                </Switch>
            </div>
        </Router>
    );
}

function Main() {
    return (
        <div>
            <h2>Main</h2>
            <Graph/>
        </div>
    );
}


function ReservationsUserFun() {
    return (
        <div>
            <h2>My reservations</h2>
            <ReservationsComponent isUser={true}/>
        </div>
    );
}

function ReservationsProducerFun() {
    return (
        <div>
            <h2>Waiting to be picked up</h2>
            <ReservationsComponent isUser={false}/>
        </div>
    );
}


function ListFoodFun() {
    return (
        <div>
            <h2>List Food</h2>
            <FoodListComponent isUser={true}/>
        </div>
    );
}

function ListFoodProducerFun() {
    return (
        <div>
            <h2>Our product Food</h2>
            <FoodListComponent isUser={false}/>
        </div>
    );
}


function About() {
    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
                commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.</p>
        </div>
    );
}

export default App;


