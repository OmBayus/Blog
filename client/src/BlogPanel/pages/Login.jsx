import React from "react"
import { Container,Row,Col,Form,Button } from "react-bootstrap"


//style
import style from "../styles/Login.module.css"


const LoginPage = ()=>{

      return(
      <div className={style.login}>
            <Container>
                  <Row className="justify-content-center">
                        <Col md={6} lg={4}>
                              <div className={style.login_wrap + " py-5"}>
                                    <div className={style.img +" d-flex align-items-center justify-content-center"}></div>
                                    <h3 className="text-center mb-0">Welcome</h3>
                                    <p className="text-center">Sign in by entering the information below</p>
                                    <Form className={style.login_form}>
                                          <Form.Group className={style.form_group}>
                                                <div className={style.icon + " d-flex align-items-center justify-content-center"}>
                                                      <i class="fa fa-user"></i>
                                                </div>
                                          <Form.Control className={style.login_form_control} type="text" placeholder="Username" />
                                          </Form.Group>
                                          <Form.Group className={style.form_group}>
                                                <div className={style.icon + " d-flex align-items-center justify-content-center"}>
                                                      <i class="fa fa-lock"></i>
                                                </div>
                                          <Form.Control className={style.login_form_control} type="password" placeholder="Password" />
                                          </Form.Group>
                                          <Form.Group className="d-flex justify-content-center mt-4">
                                                <Button className={style.btnlogin +" px-5"} variant="outline-light" size="lg">Sign in</Button>
                                          </Form.Group>
                                    </Form>
                              </div>
                        </Col>
                  </Row>
            </Container>
      </div>
      )
}





export default LoginPage