import React from "react"

//Bootstrap
import { Container } from "react-bootstrap"

//style
import blogMainStyles from "../styles/blogmain.module.css"

//Component
import BlogItem from "./BlogItem"

const BlogMain = ()=>{
      return(
            <section className={blogMainStyles.blogMain}>
                  <Container>
                        <BlogItem />
                        <BlogItem/>
                        <BlogItem/>
                        {/* BlogItem */}
                        {/* BlogItem */}
                  </Container>
            </section>
      )
}


export default BlogMain