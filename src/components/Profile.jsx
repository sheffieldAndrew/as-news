import { useContext } from "react";
import { UserProfile } from "../context/UserProfile";


const Profile = () => {
  const { userProfile } = useContext(UserProfile);

  return (
    <div className="profile">
      <h4 className="profile_heading">{userProfile.userName}</h4>
      <img
        src={userProfile.avatar_url}
        alt="user avatar"
        className="profile_icon_image"
        height="150px"
      />
      <br/>
      <p className="profile_changeuser">Change User</p>
    </div>
  );
};

export default Profile;
