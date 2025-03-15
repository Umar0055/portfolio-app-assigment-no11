import React from 'react'
import BlogCard from '../../components/cards/BlogCard'
import {blogpost} from '../../constants/about.constant'
export default function Blog() {
  return (
    <article className="blog" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">
{
  blogpost.map((item,index)=>{
    return <BlogCard key={index} image={item.image} title={item.title} description={item.description} />
  })
}
            

          </ul>

        </section>

      </article>



  )
}
