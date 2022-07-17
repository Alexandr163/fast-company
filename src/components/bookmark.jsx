import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-outline-danger" {...rest}>
      <i className={"bi bi-heart" + (status ? "bi bi-heart-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
