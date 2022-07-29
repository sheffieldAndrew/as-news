import { useEffect, useState } from "react";
import UserCard from "./UserCard";


const ChangeUser = () => {


  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/users`)
      .then((res) => res.json())

      .then(({ users }) => setUsersList(users));
  }, []);

  return (
  <div className="userlist">
    <h2 className="changeUser_usersList_header"> Choose a user:</h2>
    <section >
     
      <ul className="changeUser_usersList">
        {usersList.map((user) => {
          return <UserCard user={user} key={user.username} usersList={usersList}/>;
        })}
      </ul>
    </section>
    </div>
  );
};

export default ChangeUser;
