import { UserProfile } from "../context/UserProfile";
import { useContext } from "react";

const UserCard = ({ user, usersList }) => {
  const { setUserProfile } = useContext(UserProfile);

  const handleClick = (e) => {
    const tempUser = usersList.filter(
      (users) => users.username === user.username
    );
    setUserProfile(tempUser[0]);
  };

  return (
    <div key={user.username} className="articleCard">
      <button
        onClick={handleClick}
        className="changeUser_button"
        value={user.username}
      >
        <h2 className="articleCard_header">{user.username}</h2>
      </button>
      <img src={user.avatar_url} alt="user avatar" height="150px" />
      <h4 className="articleCard_name">{user.name}</h4>
    </div>
  );
};

export default UserCard;
