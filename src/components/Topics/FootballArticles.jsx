import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";
import SortByCategory from "../SortByCategory";
import axios from "axios";

const FootballArticles = () => {
  const [footballArticles, setFootballArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [topic] = useState("football");

  useEffect(() => {
    axios
      .get(`https://as-nc-news.herokuapp.com/api/articles`, {
        params: {
          sort_by: sort_by,
          order: order,
          topic: topic,
        },
      })
      .then((res) => setFootballArticles(res.data.articles));
  }, [sort_by, order, topic]);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Football Articles</h2>
      <SortByCategory setSort_by={setSort_by} setOrder={setOrder} />
      {footballArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </main>
  );
};

export default FootballArticles;
