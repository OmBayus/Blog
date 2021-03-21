import React from "react"

//Boootstrap
import { Container, Form, Row,Col } from "react-bootstrap"

// style
import styles from "../styles/blogdetailsmain.module.css"

const BlogDetailsMain = ()=>{
      return(
            <section className={styles.main}>
                  <Container>
                        <div className={styles.postImg}>
                              <img src="/resim.webp" alt="post-img"/>
                        </div>
                        <div className={styles.blogdetalis}>
                              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                              
                              <ul className={styles.blog_info}>
                                    <li><div><i class="far fa-user"></i> Travel, Lifestyle</div></li>
                                    <li><div><i class="far fa-comments"></i> 03 Comments</div></li>
                              </ul>
                              
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                              </p>
                              
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                              </p>
                              
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                              </p>
                              
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                              </p>
                        </div>

                        <div className={styles.blogAuthor}>
                              <div className="media align-items-center">
                                    <img src="/author.png" alt="author" />
                                    <div className={styles.mediabody}>
                                          <div>
                                                <h4>OmBayus</h4>
                                          </div>
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                                    </div>
                              </div>
                        </div>

                        <div className={styles.commentsarea}>
                              <h4>3 Comments</h4>
                              <div className={styles.comment}>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                                    </p>

                                    <div class="d-flex justify-content-between">
                                          <div class="d-flex align-items-center">
                                                <h5>Furkkan Bayramçavuş</h5>
                                                <p class={styles.date}>December 4, 2017 at 3:12 pm </p>
                                          </div>
                                    </div>
                              </div>
                              <div className={styles.comment}>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    </p>

                                    <div class="d-flex justify-content-between">
                                          <div class="d-flex align-items-center">
                                                <h5>Furkkan Bayramçavuş</h5>
                                                <p class={styles.date}>December 4, 2017 at 3:12 pm </p>
                                          </div>
                                    </div>
                              </div>
                              <div className={styles.comment}>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    </p>

                                    <div class="d-flex justify-content-between">
                                          <div class="d-flex align-items-center">
                                                <h5>Furkkan Bayramçavuş</h5>
                                                <p class={styles.date}>December 4, 2017 at 3:12 pm </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className={styles.commentForm}>
                              <h4>Leave a Reply</h4>
                              <Form class="form-contact comment_form" action="#" id="commentForm">
                                    <Row>
                                          <Col xs={12}>
                                                <Form.Group className={styles.formitem}>
                                                      <textarea className={styles.formcontrol} style={{width:"100%"}} name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                </Form.Group>
                                          </Col>
                                          <Col sm={6}>
                                                <Form.Group className={styles.formitem}>
                                                      <input className={styles.formcontrol} name="name" id="name" type="text" placeholder="Name"/>
                                                </Form.Group>
                                          </Col>
                                          <Col sm={6}>
                                                <Form.Group className={styles.formitem}>
                                                      <input className={styles.formcontrol} name="email" id="email" type="email" placeholder="Email"/>
                                                </Form.Group>
                                          </Col>
                                    </Row>
                                    <Form.Group className={styles.formitem}>
                                          <button type="submit" className={styles.button} >Send Message</button>
                                    </Form.Group>
                              </Form>
                        </div>
                        
                  </Container>                        
            </section>
      )
}


export default BlogDetailsMain