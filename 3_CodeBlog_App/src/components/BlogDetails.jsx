import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] mb-[5px] ml-5'>
        <NavLink to={`/blog/${post.id}`}>
            <strong>{post.title}</strong>
        </NavLink>
        <p>
            By
            <strong> {post.author} </strong>
            on {""}
            <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}>
                <strong>{post.category}</strong>
            </NavLink>
        </p>
        <p>
            Posted on : {post.date}
        </p>
        <p>
            {post.content}
        </p>
        <div>
            {post.tags.map((tag , index) =>(
                <NavLink 
                key={index} to={`/tags/${tag.replaceAll(" " , "-")}`}
                style={{ color: 'blue', textDecoration: 'none', marginRight: '8px' }}
                >
                    <span >{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails