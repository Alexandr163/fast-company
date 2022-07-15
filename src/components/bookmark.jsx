import React from "react";

const Bookmark = (props) => {
  const { fieldBookMark, id, onToggleBookMark } = props;
  let classes = fieldBookMark ? "bi bi-heart-fill" : "bi bi-heart";
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => onToggleBookMark(id)}
    >
      <i className={classes}></i>
    </button>
  );
};

export default Bookmark;
