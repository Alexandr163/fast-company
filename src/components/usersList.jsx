import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import Users from "./users";
import api from "../api";

const UsersList = () => {
    const { usersId } = useParams();

    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(user).then((data) => setUser(data));
    }, []);

    return usersId ? <UserPage /> : <Users />;
};

export default UsersList;
