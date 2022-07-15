import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
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
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      />
      ;
    </>
  );
};

export default App;
