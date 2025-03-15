import React from 'react'

export default function BlogCard(props) {
  return (
    <li className="blog-post-item">
    <a href="#">

      <figure className="blog-banner-box">
        <img src={props.blog} alt="Design conferences in 2022" loading="lazy"/>
      </figure>

      <div className="blog-content">

        <div className="blog-meta">
          <p className="blog-category">Design</p>

          <span className="dot"></span>

          <p >Fab 23, 2022</p>
        </div>

        <h3 className="h3 blog-item-title">{props.title}</h3>

        <p className="blog-text">
            {props.description}
        </p>

      </div>

    </a>
  </li>

  )
}
