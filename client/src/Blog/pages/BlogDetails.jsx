import React, { useEffect } from "react"
import {useRouteMatch} from "react-router-dom"

//Bootstrap
import {Breadcrumb} from "react-bootstrap"

//style
import styles from "../styles/blogdetails.module.css"

//Layouts
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

//Components
import Hero from "../components/Hero"
import BlogDetailsMain from "../components/BlogDetailsMain"

const SinglePageBlog = ()=>{

      const match = useRouteMatch("/:id").params.id

      useEffect(()=>{
            window.scroll(0,0)
      },[])


      return(
            <React.Fragment>
                  <Navbar/>
                  <Hero title="Blog Details">
                  <Breadcrumb className={styles.banner}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Blog Details</Breadcrumb.Item>
                  </Breadcrumb>
                  </Hero>
                  <BlogDetailsMain match={match}/>
                  <Footer/>
            </React.Fragment>
      )
}


export default SinglePageBlog