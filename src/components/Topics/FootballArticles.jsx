import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";
import SortBy from "../SortBy";

const FootballArticles = () => {
  const [footballArticles, setFootballArticles] = useState([]);
  const [sort_by, setSort_by] = useState('created_at');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=football`)
      .then((res) => res.json())
      .then(({ articles }) => setFootballArticles(articles));
  }, []);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Football Articles</h2>
      <SortBy  setSort_by={setSort_by} setOrder={setOrder}/>
      {footballArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </main>
  );
};

export default FootballArticles;
