import React from "react"

//Components
import Navbar from "../layouts/Navbar"
import Hero from "../components/Hero"
import BlogMain from "../components/BlogMain"
import Footer from "../layouts/Footer"

const Blog = ()=>{
      return(
            <React.Fragment>
                  <Navbar/>
                  <Hero/>
                  <BlogMain/>
                  <Footer/>
            </React.Fragment>
      )
}


export default Blog