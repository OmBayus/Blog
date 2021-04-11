import React from "react"

//Bootstrap
import {Container} from "react-bootstrap"

//style
import heroStyle from "../styles/hero.module.css"


const Hero = (props) =>{
      return(
            <section className={heroStyle.hero_section}>
                  <Container className="text-center">
                        <h2>{props.title ? props.title : "Blog"}</h2>
                        {props.children}
                  </Container>
            </section>
      )
}

export default Hero