// src/ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css'  // Import CSS for styling
import profilePic from './ProfilePic/profile-picture.jpg';

const ProfilePage = () => {
    const user = {
        name: 'Aarti Swami',
        email: 'aartiswami5223@gmail.com',
        bio: 'A passionate web developer from Karad.',
        profilePicUrl: profilePic // Placeholder image
    };

    return (
        <div className="profile-page">
            <ProfilePicture url={user.profilePicUrl} />
            <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
        </div>
    );
};

export default ProfilePage;
