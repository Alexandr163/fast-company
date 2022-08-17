import { React } from "react";
import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import Users from "./users";

const UsersList = () => {
    const { usersId } = useParams();

    return usersId ? <UserPage id={usersId} /> : <Users />;
};

export default UsersList;
