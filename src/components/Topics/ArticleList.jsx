import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";
import axios from "axios";
import SortBy from "../SortBy";

const ArticleList = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [sort_by, setSort_by] = useState();
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    axios
      .get(`https://as-nc-news.herokuapp.com/api/articles`, {

      params: {
        sort_by:sort_by,
        order:order,
      }
      })
      .then((res) => setNewsArticles(res.data.articles));
  }, [sort_by, order]);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">News Articles</h2>
      <SortBy setSort_by={setSort_by} setOrder={setOrder}/>
      <div className="articlesList_articles">
        {newsArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </main>
  );
};

export default ArticleList;


