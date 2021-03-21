import React from "react"

//Layouts
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

//Components
import Hero from "../components/Hero"
import BlogMain from "../components/BlogMain"

//dummy data
import {db} from "../db"

const Blog = ()=>{
      return(
            <React.Fragment>
                  <Navbar/>
                  <Hero/>
                  <BlogMain posts={db} />
                  <Footer/>
            </React.Fragment>
      )
}


export default Blog