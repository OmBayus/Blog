import React from "react"

//bootstrap
import {Image} from "react-bootstrap"

//style
import blogItemStyle from "../styles/blogItem.module.css"

const BlogItem = ()=>{
      return(
            <article className={blogItemStyle.blogItem}>
                  <a href="/">

                        <div className={blogItemStyle.blogItemImg}>
                              <Image className={blogItemStyle.img} src="/resim.webp"thumbnail />

                              <div href="#" className={blogItemStyle.date}>
                                    <h3>15</h3>
                                    <p>Jan</p>
                              </div>
                        </div>


                        <div className={blogItemStyle.details}>
                              <div className="d-inline-block" style={{color:"#2a2a2a"}}>
                                    <h2>Lorem Lorem Lorem Lorem</h2>
                              </div>
                              <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                  </a>
            </article>
      )
}


export default BlogItem