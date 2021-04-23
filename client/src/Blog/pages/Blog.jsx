import React,{useEffect, useState} from "react"
import axios from "axios"

//Layouts
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

//Components
import Hero from "../components/Hero"
import BlogMain from "../components/BlogMain"

const url = "http://localhost:4000/api/post"

const Blog = ()=>{

      const [db,setDB] = useState([])

      useEffect(()=>{
            window.scroll(0,0)
            axios.get(url+"/")
                  .then(res=>{
                        setDB(res.data)
                  })
      },[])


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