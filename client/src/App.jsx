import React from "react"
import {Switch, Route} from "react-router-dom"

//pages
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"


const App = ()=>{
  return(
    <Switch>

      <Route path="/" exact>
      <Blog/>
      </Route>

      <Route path="/:id">
        <BlogDetails/>
      </Route>
      
    </Switch>
  )
}


export default App