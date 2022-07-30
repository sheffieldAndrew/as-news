import { useContext } from "react";
import { UserProfile } from "../context/UserProfile";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userProfile } = useContext(UserProfile);

  return (
    <div className="profile">
      <h4 className="profile_heading">{userProfile.username}</h4>
      <img
        src={userProfile.avatar_url}
        alt="user avatar"
        className="profile_icon_image"
        height="150px"
      />
      <Link to="/changeUser" className="profile_changeUser_link">
        Change User
      </Link>
    </div>
  );
};

export default Profile;
