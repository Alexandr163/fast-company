import React from "react";
import api from "../api"

const Users = () => {
    console.log(api.users.fetchAll());
    return <h1>Usres</h1>
};

export default Users;
