import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">aabb0219@naver.com</div>
          <div className="profile__name">서민지</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        logout
      </Link>
    </div>
  );
};

export default Profile;
