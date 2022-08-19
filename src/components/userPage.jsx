import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
<<<<<<< HEAD
                <h1> {user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClick}
                >
                    {" "}
                    Все Пользователи
=======
                <h1>{user.name}</h1>
                <h2>{`Професиия: ${user.profession.name}`}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>{`CompletedMeetings: ${user.completedMeetings}`}</p>
                <h2>{`Rate: ${user.rate}`}</h2>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleClick}
                >
                    Все пользователи
>>>>>>> 50bdc769988d1130411ddfc285ca739cf5dff0a7
                </button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
<<<<<<< HEAD
    userId: PropTypes.string.isRequired
=======
    userId: PropTypes.string
>>>>>>> 50bdc769988d1130411ddfc285ca739cf5dff0a7
};

export default UserPage;
