import React from "react"

//Bootstrap
import { Container } from "react-bootstrap"

//style
import blogMainStyles from "../styles/blogmain.module.css"

//Component
import BlogItem from "./BlogItem"

const BlogMain = ({posts})=>{
      return(
            <section className={blogMainStyles.blogMain}>
                  <Container>
                        {
                              posts.map(post=>(<BlogItem key={post.id} post={post}/>))
                        }
                  </Container>
            </section>
      )
}


export default BlogMain