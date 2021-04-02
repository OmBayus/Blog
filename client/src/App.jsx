import React from "react"
import {Switch, Route} from "react-router-dom"

//pages
import Blog from "./Blog/pages/Blog"
import BlogDetails from "./Blog/pages/BlogDetails"
import LoginPage from "./BlogPanel/pages/Login"
import BlogPanel from "./BlogPanel/pages/Panel"


const App = ()=>{
  return(
    <Switch>

      <Route path="/" exact>
        <Blog/>
      </Route>

      <Route path="/panel" exact>
        <BlogPanel/>
      </Route>

      <Route path="/login" exact>
        <LoginPage/>
      </Route>

      <Route path="/:id">
        <BlogDetails/>
      </Route>
      
    </Switch>
  )
}


export default App