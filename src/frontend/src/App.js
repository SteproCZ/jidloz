import React from 'react';
import './App.css';
import {Login} from "./Components/Login";
import {RegistrationUser} from "./Components/RegistrationUser";
import {RegistrationProducer} from "./Components/RegistrationProducer";
import {ListFood} from "./Components/ListFood";
import {ProducerListFood} from "./Components/ProducerListFood";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

//grovy - <version>2.0-M2-groovy-2.5</version>
// <packaging>war</packaging>


function App() {
    return (
        <Router>
            <div className="App">
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
                        <Link to="/topics">Topics</Link>
                    </li>

                    <li>
                        <Link to="/producer">Producer</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/login">
                        <LoginFun />
                    </Route>
                    <Route path="/registration">
                        <RegistrationFun />
                    </Route>
                    <Route path="/registration/User">
                        <RegistrationUserFun />
                    </Route>
                    <Route path="/registration/Producer">
                        <RegistrationProducerFun />
                    </Route>

                    <Route path="/producer">
                        <ListFoodProducerFun />
                    </Route>

                    <Route path="/user">
                        <ListFoodFun />
                    </Route>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function LoginFun() {
    return (
        <div>
            <h2>Login</h2>
            <Login />
        </div>
    );
}

function RegistrationFun() {
    return (
        <div>
            <h2>Registration</h2>
            <Link to="/registration/user">User</Link>
            <br />
            <Link to="/registration/producer">Producer</Link>
            <Switch>
                <Route path="/registration/user">
                    <RegistrationUserFun />
                </Route>
                <Route path="/registration/producer">
                    <RegistrationProducerFun />
                </Route>
            </Switch>
        </div>
    );
}

function RegistrationUserFun() {
    return (
        <div>
            <h2>Registration like User</h2>
            <RegistrationUser />
        </div>
    );
}

function RegistrationProducerFun() {
    return (
        <div>
            <h2>Registration like Producer</h2>
            <RegistrationProducer />
        </div>
    );
}

function ListFoodFun() {
    return (
        <div>
            <h2>List Food</h2>
            <ListFood/>
        </div>
    );
}

function ListFoodProducerFun() {
    return (
        <div>
            <h2>Our product Food</h2>
            <ProducerListFood/>
        </div>
    );
}




function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;


