import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";
import SortBy from "../SortBy";

const CodingArticles = () => {
  const [codingArticles, setCodingArticles] = useState([]);
  const [sort_by, setSort_by] = useState('created_at');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=coding`)
      .then((res) => res.json())
      .then(({ articles }) => setCodingArticles(articles));
  }, []);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Coding Articles</h2>
      <SortBy  setSort_by={setSort_by} setOrder={setOrder}/>
      {codingArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </main>
  );
};

export default CodingArticles;
