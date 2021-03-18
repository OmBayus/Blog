import React from "react"

//Components
import Navbar from "../layouts/Navbar"
import Hero from "../components/Hero"
import BlogMain from "../components/BlogMain"

const Blog = ()=>{
      return(
            <React.Fragment>
                  <Navbar/>
                  <Hero/>
                  <BlogMain/>
            </React.Fragment>
      )
}


export default Blog