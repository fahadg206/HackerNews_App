import React, { useState } from 'react';


const MainNews = ({ input, articles }) => {

  const news = articles.map(article => {
    return (
      <div className='card' key={article.title}>
        <div className='image'>
          <img src={article.urlToImage} />
        </div>
        <div className='content'>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.description}</p>
        </div>
      </div>
    )
  })

    return (
      <div>
        {news}
      </div>
    )
}

export default MainNews;

