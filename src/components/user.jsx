import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
  const {
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    _id,
    fieldBookMark,
    handleToggleBookMark,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie key={item._id} {...item} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <Bookmark
          id={_id}
          fieldBookMark={fieldBookMark}
          onToggleBookMark={handleToggleBookMark}
        />
      </td>
      <td>
        <button 
        className="btn btn-danger" 
        onClick={() => props.onDelete(_id)} 
        >
          удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
