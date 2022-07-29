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
    <section className="changeUser_usersList">
      <h2 className="changeUser_usersList_header"> Choose a user:</h2>
      <ul>
        {usersList.map((user) => {
          return <UserCard user={user} key={user.username} usersList={usersList}/>;
        })}
      </ul>
    </section>
  );
};

export default ChangeUser;
