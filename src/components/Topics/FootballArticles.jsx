import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";
import SortByCategory from "../SortByCategory";

const FootballArticles = () => {
  const [footballArticles, setFootballArticles] = useState([]);
  const [sort_by, setSort_by] = useState('created_at');


  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=football`)
      .then((res) => res.json())
      .then(({ articles }) => setFootballArticles(articles));
  }, [sort_by]);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Football Articles</h2>
      <SortByCategory  setSort_by={setSort_by}/>
      {footballArticles.sort((a,b)=>b.sort_by-a.sort_by).map((article) => {
  return <ArticleCard article={article} key={article.article_id}/>;
})}
    </main>
  );
};

export default FootballArticles;


