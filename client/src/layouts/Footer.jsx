import React from "react"

//bootstrap
import {Container,Row,Col} from "react-bootstrap"

//style
import footerStyle from "../styles/footer.module.css"

const Footer = ()=>{
      return(
            <footer className={footerStyle.footer_section}>
                  <Container>
                        <Row>
                        <Col lg="12">
                              <div className={footerStyle.footer_text}>
                                    <div className={footerStyle.ft_logo}>
                                          <a href="/" className={footerStyle.footer_logo}>OmBayus</a>
                                    </div>
                                    <div className={footerStyle.copyright_text}><p>Copyright © 2021 | Bu Websitesi <a href="https://github.com/OmBayus">OmBayus</a> tarafından yapılmıştır</p></div>
                                    <div className={footerStyle.ft_social}>
                                          <a href="/" className={footerStyle.social_icon_facebook}><i class="fa fa-facebook"></i></a>
                                          <a href="/" className={footerStyle.social_icon_twitter}><i class="fa fa-twitter"></i></a>
                                          <a href="/" className={footerStyle.social_icon_linkedin}><i class="fa fa-linkedin"></i></a>
                                          <a href="/" className={footerStyle.social_icon_instagram}><i class="fa fa-instagram"></i></a>
                                          <a href="/" className={footerStyle.social_icon_youtube}><i class="fa fa-youtube-play"></i></a>
                                    </div>
                              </div>
                        </Col>
                        </Row>
                  </Container>
            </footer>
      )
}


export default Footer