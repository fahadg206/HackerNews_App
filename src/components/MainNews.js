import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MainNews = ({ term }) => {

  const [articles, setArticles] = useState([])

    useEffect(() => {
      axios.get("https://newsapi.org/v2/everything", {
        params: {
          apiKey: "b74f4d2c7b824f94929199595d382465",
          q: term
        }
      }).then((res) => {
        setArticles(res.data.articles)
      })
    }, [term])

  const news = articles.map(article => {
    return (
      <div key={article.title}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>{article.content}</p>
      </div>
    )
  })

    return (
      <div>{news}</div>
    )
}

export default MainNews;

