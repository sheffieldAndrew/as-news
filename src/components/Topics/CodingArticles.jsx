import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

const CodingArticles = () => {
  const [codingArticles, setCodingArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=coding`)
      .then((res) => res.json())
      .then(({ articles }) => setCodingArticles(articles));
  }, []);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Coding Articles</h2>
      {codingArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </main>
  );
};

export default CodingArticles;
