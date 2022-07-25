import { useState, useEffect } from "react";

const ArticleSort = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() =>{
    fetch(`https://as-nc-news.herokuapp.com/api/articles`)
    .then((res)=>
    res.json())
    .then(({articles}) =>
    setNewsArticles(articles))
 
}, [])

console.log(newsArticles);

  return (
    <div className="app_articlesList">
      <h2 className="app_articlesList_header">News Articles</h2>
    </div>
  );
};

export default ArticleSort;
