import React from "react"

//bootstrap
import {Image} from "react-bootstrap"

//style
import blogItemStyle from "../styles/blogItem.module.css"

const monthNames = ["Jan", "Feb", "Marc", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const BlogItem = ({post})=>{
      return(
            <article className={blogItemStyle.blogItem}>
                  <a href="/">

                        <div className={blogItemStyle.blogItemImg}>
                              <Image className={blogItemStyle.img} src={post.imgUrl ? post.imgUrl : ""} thumbnail />

                              <div className={blogItemStyle.date}>
                                    <h3 className="text-center">{post.date.getDate()}</h3>
                                    <p>{monthNames[post.date.getMonth()]}</p>
                              </div>
                        </div>


                        <div className={blogItemStyle.details}>
                              <div className="d-inline-block" style={{color:"#2a2a2a"}}>
                                    <h2>{post.title}</h2>
                              </div>
                              <p>{post.details[0]}</p>
                              <ul className={blogItemStyle.blog_info}>
                                    <li><div><i class="far fa-user"></i> {post.topic}</div></li>
                                    <li><div><i class="far fa-comments"></i> {post.comments.length} Comments</div></li>
                              </ul>
                        </div>
                  </a>
            </article>
      )
}


export default BlogItem