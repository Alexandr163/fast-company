import React from "react";

const Bookmark = (props) => {
  let classes = props.fieldBookMark ? "bi bi-heart-fill" : "bi bi-heart";
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => props.onToggleBookMark(props.id)}
    >
      <i className={classes}></i>
    </button>
  );
};

export default Bookmark;
