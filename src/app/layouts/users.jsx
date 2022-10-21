import React from "react";
import { Redirect, useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UserProvider from "../hooks/useUsers";
import localStorageService from "../services/localStorage.service";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const authId = localStorageService.getUserId();
    return (
        <>
            <UserProvider>
                {userId ? (
                    edit ? (
                        authId === userId ? (
                            <EditUserPage />
                        ) : (
                            <Redirect to={`/users/${authId}/edit`} />
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserProvider>
        </>
    );
};

export default Users;
