import React from 'react';
import './App.css';
import {Login} from "./Components/Login";
import {RegistrationUser} from "./Components/RegistrationUser";
import {RegistrationProducer} from "./Components/RegistrationProducer";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {Navbar} from "./Components/Navbar";
import {FoodListComponent} from "./Components/FoodListComponent";
import LoggedProfile from "./Components/LoggedProfile";
import {ReservationsComponent} from "./Components/ReservationsComponent";

//grovy - <version>2.0-M2-groovy-2.5</version>
// <packaging>war</packaging>


function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/reservations">reservations</Link>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Main} />

                    <Route path="/about" component={About} />

                    <Route path="/login" component={Login} />

                    <Route path="/logout" component={Logout} />

                    <Route path="/producer" component={ListFoodProducerFun} />

                    <Route path="/user" component={ListFoodFun} />

                    <Route path="/reservations" component={ReservationsFun} />

                    <Route path="/registration/user" component={RegistrationUser} />

                    <Route path="/registration/producer" component={RegistrationProducer} />


                </Switch>
            </div>
        </Router>
    );
}

function Main() {
    return <h2>Main</h2>;
}

function Logout() {
    LoggedProfile.clear();
    return <h2>You have been logged out.</h2>;
}

function ReservationsFun() {
    return (
        <div>
            <h2>Reservations</h2>
            <ReservationsComponent isUser={true}/>
        </div>
    );
}


function ListFoodFun() {
    return (
        <div>
            <h2>List Food</h2>
            <FoodListComponent isUser={true} />
        </div>
    );
}

function ListFoodProducerFun() {
    return (
        <div>
            <h2>Our product Food</h2>
            <FoodListComponent isUser={false} />
        </div>
    );
}


function About() {
    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default App;


