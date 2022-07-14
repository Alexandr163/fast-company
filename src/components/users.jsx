import React, { useState } from "react";
import api from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(
    api.users.fetchAll().map((user) => ({ ...user, fieldBookMark: false }))
  );
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    const usersBookmark = users.map((user) => {
      if (user._id === id) {
        user.fieldBookMark = !user.fieldBookMark;
      }      
      return user;
    });
    setUsers(usersBookmark);
  };
  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                onDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
