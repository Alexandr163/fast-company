import React from "react";
<<<<<<< HEAD
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";

=======
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersList from "./components/usersList";
>>>>>>> 50bdc769988d1130411ddfc285ca739cf5dff0a7
function App() {
    return (
        <div>
            <NavBar />
<<<<<<< HEAD
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
=======
            {/* <Users /> */}
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:usersId?" component={UsersList} />
>>>>>>> 50bdc769988d1130411ddfc285ca739cf5dff0a7
            </Switch>
        </div>
    );
}

export default App;
