// src/ProfileDetails.js
import React from 'react';

const ProfileDetails = ({ name, email, bio }) => {
    return (
        <div className="profile-details">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{bio}</p>
        </div>
    );
};

export default ProfileDetails;
