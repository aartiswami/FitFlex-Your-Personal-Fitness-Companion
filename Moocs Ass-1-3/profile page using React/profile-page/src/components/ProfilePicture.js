// src/ProfilePicture.js
import React from 'react';

const ProfilePicture = ({ url }) => {
    return (
        <div className="profile-picture">
            <img src={url} alt="Profile" />
        </div>
    );
};

export default ProfilePicture;
