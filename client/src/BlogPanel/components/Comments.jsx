import React, { useEffect, useState } from "react"
import axios from "axios"

import styles from "../styles/Comments.module.css"

const url = "http://localhost:4000"

const Comments = ()=>{
      const [comments,setComments] = useState([])

      const getComments = ()=>{
            const temp = []
            axios.get(url+"/api/post/")
            .then(res=>{
                  res.data.forEach(element => {
                        element.comments.forEach(comment=>{
                              temp.push({...comment,postid:element.id})
                              
                        })
                  });
                  temp.sort((a,b)=>{
                        if(new Date(a.date).getTime() < new Date(b.date).getTime()){
                              return 1;
                        }
                        if(new Date(a.date).getTime() > new Date(b.date).getTime()){
                              return -1;
                        }
                        return 0;
                  })
                  setComments(temp);
                  

            })
      }

      useEffect(()=>{
            getComments()
      },[])

      const deleteComment = (postid,id)=>{
            axios.post((url+"/api/comment/delete"),{postid:postid,id:id})
                  .then(res=>{
                        console.log(res.data)
                        getComments()
                  })
                  .catch(res=>{
                        console.log(res)
                  })
      }

      return(<div>{
            comments.map((comment,index)=>(
                  <div key={index} className={styles.comment}>
                        <div className={styles.close} onClick={()=>deleteComment(comment.postid,comment._id)}><i class="fas fa-times"></i></div>
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
            ))
      }</div>)
}


export default Comments