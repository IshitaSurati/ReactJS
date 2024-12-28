import React from "react";

const UserProfileCard = ({
  name,
  age,
  bio,
  location,
  profilePicture,
  followText,
}) => {
  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} />
      <h2>{`${name}, ${age}`}</h2>
      <p>{location}</p>
      <p>{bio}</p>
      <button>{followText}</button>
    </div>
  );
};

export default UserProfileCard;
