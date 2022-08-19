import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersList from "./components/usersList";
function App() {
    return (
        <div>
            <NavBar />
            {/* <Users /> */}
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:usersId?" component={UsersList} />
            </Switch>
        </div>
    );
}

export default App;
