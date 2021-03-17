import React from "react"

//Bootstrap
import {Container} from "react-bootstrap"

//style
import heroStyle from "../styles/hero.module.css"


const Hero = () =>{
      return(
            <section className={heroStyle.hero_section}>
                  <Container className="text-center">
                        <h2>Blog</h2>
                  </Container>
            </section>
      )
}

export default Hero