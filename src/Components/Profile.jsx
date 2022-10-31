import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import "../styles/Profile.scss"

const Profile = () => {
  const { username } = useContext(LoginContext);

  return (
    <div className="profile-main">
      <div className="profile-box-content">
        <h1 className="profile-title">Profile Page</h1>
        <h2 className="profile-username">Username: {username}</h2>
      </div>
    </div>
  );
};

export default Profile;
