import { useState } from "react";
import { UserProfile } from "./context/UserProfile";

import Header from "./components/Header";
import Profile from "./components/Profile";

import Navigation from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleList from "./components/Topics/ArticleList";
import FootballArticles from "./components/Topics/FootballArticles";
import CodingArticles from "./components/Topics/CodingArticles";
import CookingArticles from "./components/Topics/CookingArticles";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [userProfile, setUserProfile] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  const [article_id, setArticle_id] = useState("");

  return (
    <BrowserRouter>
      <UserProfile.Provider value={{ userProfile, setUserProfile }}>
        <div className="App">
          <div className="app_header">
            <Header />
            <Profile />
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route
              path="/football"
              element={
                <FootballArticles
                  article_id={article_id}
                  setArticle_id={setArticle_id}
                />
              }
            />
            <Route
              path="/coding"
              element={
                <CodingArticles
                  article_id={article_id}
                  setArticle_id={setArticle_id}
                />
              }
            />
            <Route
              path="/cooking"
              element={
                <CookingArticles
                  article_id={article_id}
                  setArticle_id={setArticle_id}
                />
              }
            />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
          </Routes>
        </div>
      </UserProfile.Provider>
    </BrowserRouter>
  );
}

export default App;
