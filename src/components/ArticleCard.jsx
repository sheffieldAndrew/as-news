const ArticleCard = ({article}) => {

    const articleSnippet = article.body.slice(0, (article.body.indexOf('.')+1))
  

  return (
    <div className="articleList_articleCard">
      <h3 className="articleList_articleCard_title">{article.title}</h3>
      <h5 className="articleList_articleCard_author">by {article.author}</h5>
      <h5 className="articleList_articleCard_topic">Topic: {article.topic}</h5>
      <p className="articleList_articleCard_snippet ">{articleSnippet}.......</p>
      <h5 className="articleList_articleCard_votes">votes: {article.votes}</h5>
    </div>
  );
};

export default ArticleCard;
