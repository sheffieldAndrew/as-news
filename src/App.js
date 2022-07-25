import Header from "./components/Header";
import { useState } from "react";
import { UserProfile } from "./context/UserProfile";
import Profile from "./components/Profile";
import ArticleSort from "./components/ArticleSort";

function App() {
  const [userProfile, setUserProfile] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <UserProfile.Provider value={{ userProfile, setUserProfile }}>
      <div className="App">
        <Header />
        <Profile />
        <ArticleSort />
      </div>
    </UserProfile.Provider>
  );
}

export default App;
