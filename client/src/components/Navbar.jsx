import React, { useEffect,useState } from "react"

//Icons
import {AiFillGithub} from "react-icons/ai"

//Bootstrap
import {Navbar,Nav,Container} from "react-bootstrap"

//stlye
import navbarStyle from "../styles/navbar.module.css"

const BlogNavbar = ()=>{

      const [fixed, setFixed] = useState(false);  

      useEffect(()=>{
            window.addEventListener('scroll',()=>{
                  const currentScrollPos = window.pageYOffset;
                  if(currentScrollPos >175){
                        setFixed(true)
                  }
                  else{
                        setFixed(false)
                  }
            })
      },[])

      return(
            <header className={navbarStyle.header+ " " + (fixed && navbarStyle.fixed)}>
                  <Container>
                        <Navbar className={navbarStyle.navbar} expand="lg">
                              <Navbar.Brand href="#home" className={navbarStyle.brand}>OmBayus Blog</Navbar.Brand>
                              <Nav className="ml-auto">
                                    <Nav.Link href="#home" className={navbarStyle.github}><AiFillGithub/>Github</Nav.Link>
                              </Nav>
                        </Navbar>
                  </Container>
            </header>
      )
}



export default BlogNavbar