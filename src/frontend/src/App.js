import React, {useState} from 'react';
import './App.css';
import {Login} from "./Components/Login";
import {RegistrationUser} from "./Components/RegistrationUser";
import {RegistrationProducer} from "./Components/RegistrationProducer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavbarComponent} from "./Components/NavbarComponent";
import {FoodListComponent} from "./Components/FoodListComponent";
import {ReservationsComponent} from "./Components/ReservationsComponent";
import {Logout} from "./Components/Logout";
import AuthService from "./service/AuthService";
import {Graph} from "./Components/Graph";
import {About} from "./Components/About";


function App() {
    const [loggedIN, setLoggedIN] = useState(AuthService.getUserInfo() !== null);

    return (

        <Router>
            <div className="App">
                <NavbarComponent {...{loggedIN}}/>

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

export default App;


