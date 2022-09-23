import React from "react";
import UserInfoCard from "./userInfoCard";
import UserQualitiesCard from "./userQualitiesCard";
import UserCompletedMrrtingsCard from "./userCompletedMeetingsCard";
import PropTypes from "prop-types";

const UserInfo = ({ user }) => {
    return (
        <>
            <div className="col-md-4 mb-3">
                <UserInfoCard user={user} />
                <UserQualitiesCard qualities={user.qualities} />
                <UserCompletedMrrtingsCard
                    completedMeetings={user.completedMeetings}
                />
            </div>
        </>
    );
};

UserInfo.propTypes = {
    user: PropTypes.object
};

export default UserInfo;
