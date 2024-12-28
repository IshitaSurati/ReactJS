import React, { useState } from "react"; // Import useState here

const UserProfileCard = ({
  name,
  age,
  bio,
  location,
  profilePicture,
  followText,
}) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const toggleFollow = () => setIsFollowed((prev) => !prev);

  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} />
      <h2>{`${name}, ${age}`}</h2>
      <p>{location}</p>
      <p>{bio}</p>
      <button onClick={toggleFollow}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserProfileCard;
