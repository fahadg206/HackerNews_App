import React, { useState } from 'react';



const MainNews = ({ input, articles }) => {

  const news = articles.map(article => {
    return (
      <div className='card' key={article.title}>
        <div className='main-image'>
          <img src={article.urlToImage} />
        </div>
        <div className='content'>
          <h3 className='title'><a href={article.url} target="_blank">{article.title}</a></h3>
          <p className='author'>{article.author}</p>
          <p className='summary'>{article.description}</p>
        </div>
      </div>
    )
  })

    return (
      <div className='news-card'>
        {news}
      </div>
    )
}

export default MainNews;

