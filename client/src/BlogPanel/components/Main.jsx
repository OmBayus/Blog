import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"

//style
import style from "../styles/Main.module.css"

const url = "http://localhost:4000"

const Main = ()=>{
      const [data,setData] = useState({posts:0,comments:0})

      useEffect(()=>{
            axios.get(url+"/api/post/").then(res=>{

                  var comments = 0
                  res.data.forEach(post => {
                        comments += post.comments.length
                  });

                  setData({posts:res.data.length,comments:comments})
            })
      },[])
      return(
      <div className={style.main}>
            <Link to="/panel/posts" className={style.card}>
                  <div>
                        <h3>Posts</h3>
                        <h1>{data.posts}</h1>
                  </div>
            </Link>
            <Link to="/panel/comments" className={style.card}>
                  <div>
                        <h3>Comments</h3>
                        <h1>{data.comments}</h1>
                  </div>
            </Link>
      </div>)
}


export default Main