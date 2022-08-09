import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    return (
        <button className="btn btn-outline-danger" {...rest}>
            <i className={"bi bi-heart" + (status ? "bi bi-heart-fill" : "")}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
