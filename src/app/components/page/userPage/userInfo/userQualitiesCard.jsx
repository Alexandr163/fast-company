import React from "react";
import PropTypes from "prop-types";
import QualitiesList from "../../../ui/qualities/qualitiesList";

const UserQualitiesCard = ({ qualities }) => {
    return (
        <div className="card mb-3">
            <div
                className="
    card-body
    d-flex
    flex-column
    justify-content-center
    text-center
"
            >
                <h5 className="card-title">
                    <span>
                        <QualitiesList qualities={qualities} />
                    </span>
                </h5>
            </div>
        </div>
    );
};

UserQualitiesCard.propTypes = {
    qualities: PropTypes.array
};

export default UserQualitiesCard;
