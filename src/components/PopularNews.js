import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PopularNews = () => {

const [topNews, setTopNews] = useState([])

useEffect(() => {
  axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          apiKey: "b74f4d2c7b824f94929199595d382465",
          country: "us",
          pageSize: 5
        }
      }).then((res) => setTopNews(res.data.articles))
})

const popularNews = topNews.map(top => {
  return (
    <div className='card' key={article.title}>
        <div>
          <img src={article.urlToImage} />
        </div>
        <div>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.description}</p>
        </div>
      </div>
  )
})

  return (
    <div>{popularNews}</div>
  )
}

export default PopularNews