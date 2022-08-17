import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    let renderUserPage = null;
    const handleReturne = () => {
        history.replace("/users");
    };
    if (user) {
        renderUserPage = (
            <>
                <h1>{user.name}</h1>
                <h2>{`Професиия: ${user.profession.name}`}</h2>
                <QualitiesList qualities={user.qualities} />
                <h5>{`CompletedMeetings: ${user.completedMeetings}`}</h5>
                <h1>{`Rate: ${user.rate}`}</h1>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleReturne}
                >
                    Все пользователи
                </button>
            </>
        );
    } else {
        renderUserPage = "loading...";
    }

    return renderUserPage;
};

UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
