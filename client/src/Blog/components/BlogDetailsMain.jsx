import React, { useEffect, useState } from "react"
import axios from "axios"

//Boootstrap
import { Container, Form, Row,Col } from "react-bootstrap"

// style
import styles from "../styles/blogdetailsmain.module.css"

const url = "http://localhost:4000"

const BlogDetailsMain = ({match})=>{

      const [post,setPost] = useState({})
      const [loading,setLoading] = useState(true)
      const [comment,setComment] = useState({
            comment:"",
            name:"",
            email:""
      })

      useEffect(()=>{
            const getData = async ()=>{
                  await axios.get(url+"/api/post/"+match)
                  .then(res=>{
                        if(res.data === false){
                              window.location.replace("/")
                        }
                        else{
                              setPost(res.data[0])
                              setLoading(false)
                        }
                  })
            }
            getData();
      },[match])

      const handleComment = (e)=>{
            const {name,value} = e.target


            setComment(prevValue=>{
                  if(name === "name"){
                        return ({comment:prevValue.comment,name:value,email:prevValue.email})
                  }
                  else if(name === "email"){
                        return ({comment:prevValue.comment,name:prevValue.name,email:value})
                  }
                  else if(name === "comment"){
                        return ({comment:value,name:prevValue.name,email:prevValue.email})
                  }
            })
      }

      const sendComment = (e)=>{
            e.preventDefault()
            axios.post(url+"/api/comment/"+match,comment).then((res)=>{
                  setPost(res.data)
                  setComment({
                        comment:"",
                        name:"",
                        email:""
                  })
            })
      }

      if(loading){
            return(<div>Loading...</div>)
      }
      else{
            return(
                  <section className={styles.main}>
                        <Container>
                              <div className={styles.postImg}>
                                    <img src="/resim.webp" alt="post-img"/>
                              </div>
                              <div className={styles.blogdetalis}>
                                    <h2>{post.title}</h2>
                                    
                                    <ul className={styles.blog_info}>
                                          <li><div><i className="far fa-user"></i> {post.topic}</div></li>
                                          <li><div><i className="far fa-comments"></i> {post.comments.length} Comments</div></li>
                                    </ul>
                                    {
                                          post.details.map((item,index)=><p key={index}>{item}</p>)
                                    }
                              </div>
      
                              <div className={styles.blogAuthor}>
                                    <div className="media align-items-center">
                                          <img src="/author.png" alt="author" />
                                          <div className={styles.mediabody}>
                                                <div>
                                                      <h4>{post.author.name}</h4>
                                                </div>
                                                <p>{post.author.details}</p>
                                          </div>
                                    </div>
                              </div>
      
                              <div className={styles.commentsarea}>
                                    <h4>{post.comments.length} Comments</h4>
                                    {post.comments.map((comment,index)=>(
                                    <div key={index} className={styles.comment}>
                                          <p>
                                          {comment.details} 
                                          </p>
      
                                          <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                      <h5>{comment.name}</h5>
                                                      <p className={styles.date}>{new Date(comment.date).toDateString()} </p>
                                                </div>
                                          </div>
                                    </div>
                                    ))}
                              </div>
      
                              <div className={styles.commentForm}>
                                    <h4>Leave a Reply</h4>
                                    <Form className="form-contact comment_form" onSubmit={sendComment} action="#" id="commentForm">
                                          <Row>
                                                <Col xs={12}>
                                                      <Form.Group className={styles.formitem}>
                                                            <textarea className={styles.formcontrol} onChange={handleComment} value={comment.comment} style={{width:"100%"}} name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                      </Form.Group>
                                                </Col>
                                                <Col sm={6}>
                                                      <Form.Group className={styles.formitem}>
                                                            <input className={styles.formcontrol} onChange={handleComment} value={comment.name} name="name" id="name" type="text" placeholder="Name"/>
                                                      </Form.Group>
                                                </Col>
                                                <Col sm={6}>
                                                      <Form.Group className={styles.formitem}>
                                                            <input className={styles.formcontrol} onChange={handleComment} value={comment.email} name="email" id="email" type="email" placeholder="Email"/>
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
      
}


export default BlogDetailsMain