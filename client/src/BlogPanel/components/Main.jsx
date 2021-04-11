import React from "react"
import {Link} from "react-router-dom"

//style
import style from "../styles/Main.module.css"

const Main = ()=>{
      return(
      <div className={style.main}>
            <Link to="/panel/posts" className={style.card}>
                  <div>
                        <h3>Posts</h3>
                        <h1>30</h1>
                  </div>
            </Link>
            <Link to="/panel/comments" className={style.card}>
                  <div>
                        <h3>Comments</h3>
                        <h1>50</h1>
                  </div>
            </Link>
      </div>)
}


export default Main