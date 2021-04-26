import React,{useEffect, useState} from 'react';
import Dropzone from "react-dropzone";
import axios from 'axios';
//dummy data
import {db} from "../../Blog/db"

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';

//Bootstrap
import {Container,Row,Col} from "react-bootstrap"

//style
import style from "../styles/Posts.module.css"


const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
      root: {
        maxWidth: 345,
        marginTop: 10
      },
      media: {
        height: 140,
      },
    });

const url = "http://localhost:4000"

const Posts = ()=>{

      const classes = useStyles();

      const [posts,setPosts] = useState([])

      const [popup,setPopup] = useState({
            del:{
                  isOpen:false,
                  id:""
            },
            newPost:{
                  isOpen:false,
                  info:{
                        title:"",
                        topic:"",
                        imgUrl:"",
                        details:[]
                  }
            },
            edit:{
                  isOpen:false,
                  info:{
                        id:"",
                        title:"",
                        topic:"",
                        imgUrl:"",
                        details:["1","2"]
                  }
            }
      })

      const [file,setFile] = useState([])

      useEffect(()=>{
            axios.get(url+"/api/post/")
                  .then(res=>{
                        setPosts(res.data)
                  })
      },[])
      

      const handlePost = (e)=>{
            const {name,value} = e.target

            if(name === "title"){
                  setPopup(prevValue=>(
                        {...prevValue,edit:{
                              isOpen:true,
                              info:{
                                    ...prevValue.edit.info,
                                    title:value
                              }
                        }}
                  ))
            }
            else if (name==="topic"){
                  setPopup(prevValue=>(
                        {...prevValue,edit:{
                              isOpen:true,
                              info:{
                                    ...prevValue.edit.info,
                                    topic:value
                              }
                        }}
                  ))
            }
      }

      const handleDetails = (index,value)=>{
            const temp = JSON.parse(JSON.stringify(popup.edit.info.details))
            temp[index] = value 

            setPopup(prevValue=>(
                  {...prevValue,edit:{
                        isOpen:true,
                        info:{
                              ...prevValue.edit.info,
                              details:temp
                        }
                  }}
            ))
      }


      const handleNewPost = (e)=>{
            const {name,value} = e.target

            if(name === "title"){
                  setPopup(prevValue=>(
                        {...prevValue,newPost:{
                              isOpen:true,
                              info:{
                                    ...prevValue.newPost.info,
                                    title:value
                              }
                        }}
                  ))
            }
            else if (name==="topic"){
                  setPopup(prevValue=>(
                        {...prevValue,newPost:{
                              isOpen:true,
                              info:{
                                    ...prevValue.newPost.info,
                                    topic:value
                              }
                        }}
                  ))
            }
      }


      const handleNewPostDetails = (index,value)=>{
            const temp = JSON.parse(JSON.stringify(popup.newPost.info.details))
            temp[index] = value 

            setPopup(prevValue=>(
                  {...prevValue,newPost:{
                        isOpen:true,
                        info:{
                              ...prevValue.newPost.info,
                              details:temp
                        }
                  }}
            ))
      }

      const handleDrop = acceptedFiles =>{

            var reader = new FileReader()
      
            reader.onload = function(e){
                  document.getElementById("resim").setAttribute("src",e.target.result)
            }
            reader.readAsDataURL(acceptedFiles[0]);
            setFile(acceptedFiles[0]);
      }



      const deletePost = async()=>{

            const res = await axios.delete(url+"/api/post/"+popup.del.id)
            
            if(res.data.error){
                  console.log(res.data)
            }
            else{
                  const temp = posts.filter(item=>item.id !==res.data.id)
                  setPosts([...temp])
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        del:{
                              isOpen:false,
                              id:""
                        }
                  }))

            }
      }

      const editPost = async(e)=>{
            e.preventDefault()

            const data = new FormData()
            data.append("id",popup.edit.info.id)
            data.append("title",popup.edit.info.title)
            data.append("topic",popup.edit.info.topic)
            data.append("file",file)
            popup.edit.info.details.map((item)=>data.append("details",item))

            const res = await axios.put(url+"/api/post/",data)

            if(res.data.error){
                  console.log(res.data)
            }
            else{
                  console.log(res.data)
                  const temp = posts.filter(item=>item.id !== res.data.id)
                  setPosts([...temp,res.data])
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        edit:{
                              isOpen:false,
                              info:{
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))
            }
      }

      const addPost = async (e) =>{

            e.preventDefault()

            const data = new FormData()
            data.append("title",popup.newPost.info.title)
            data.append("topic",popup.newPost.info.topic)
            popup.newPost.info.details.map((item)=>data.append("details",item))
            data.append("file",file)

            const res = await axios.post(url+"/api/post/",data)

            if(res.data.error){
                  console.log(res.data)
            }
            else{
                  setPosts([...posts,res.data])
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        newPost:{
                              isOpen:false,
                              info:{
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))
            }

      }




      return(
      <div>
      <Container>
            <div className={style.newPost} onClick={()=>setPopup(prevValue=>({
                  ...prevValue,
                  newPost:{
                        isOpen:true,
                        info:{
                              title:"",
                              topic:"",
                              imgUrl:"",
                              details:[]
                        }
                  }
            }))}>
                  <AddIcon/>
            </div>
      </Container>
      <Container fluid className={style.Posts}>
            <Row>
            {
                  posts.map(item=>(
                  <Col md={3} key={item.id}>
                        <Card className={classes.root}>
                              <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={item.imgUrl}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {item.details[0].substr(0, 186)}
                                    </Typography>
                                    </CardContent>
                              </CardActionArea>
                              <CardActions>
                                    <Button size="small" color="primary" onClick={()=>{
                                          setPopup(prevValue=>({...prevValue,edit:{
                                                isOpen:true,
                                                info:{
                                                      id:item.id,
                                                      title:item.title,
                                                      topic:item.topic,
                                                      imgUrl:item.imgUrl,
                                                      details:item.details
                                                }
                                          }}))
                                    }}>
                                    Edit
                                    </Button>
                                    <Button size="small" color="secondary" onClick={()=>setPopup(prevValue=>({
                                          ...prevValue,del:{isOpen:true,id:item.id}
                                    }))}>
                                    Delete
                                    </Button>
                              </CardActions>
                        </Card>
                  </Col>
                  ))   
            }
            </Row>
      </Container>
      {/* Add Post */}
      <Dialog 
            open={popup.newPost.isOpen} 
            TransitionComponent={Transition} 
            onClose={()=>setPopup(prevValue=>({
                        ...prevValue,
                        newPost:{
                              isOpen:false,
                              info:{
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))} 
                  aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Post</DialogTitle>
            <DialogContent>
            <DialogContentText>
                  Add new post
            </DialogContentText>
                        <img id="resim" src="#" alt="img" className="dropzone-img" />
                        <Dropzone
                        onDrop={handleDrop}
                        accept="image/*"
                        minSize={200}
                        maxSize={3072000}
                        >
                        {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: "dropzone" })}>
                              <input {...getInputProps()} />
                              <p>Drag'n'drop images, or click to select files</p>
                        </div>
                        )}
                        </Dropzone>
                  <TextField
                        autoFocus
                        margin="dense"
                        value={popup.newPost.info.title}
                        type="text"
                        name="title"
                        label="Title"
                        onChange={handleNewPost}
                        fullWidth
                  />
                  <TextField
                        autoFocus
                        margin="dense"
                        name="topic"
                        label="Topic"
                        value={popup.newPost.info.topic}
                        onChange={handleNewPost}
                        type="text"
                        fullWidth
                  />
                  {
                        popup.newPost.info.details.map((detail,index)=>{
                              return(
                                    <TextField
                                          key={index}
                                          autoFocus
                                          margin="dense"
                                          name="Detail"
                                          label={"Details " + (index+1)}
                                          value={detail}
                                          onChange={(e)=>handleNewPostDetails(index,e.target.value)}
                                          type="text"
                                          fullWidth
                                    />
                              )
                        })
                  }
                  <Button color="primary" onClick={()=>setPopup(prevValue=>{
                        const detailss = JSON.parse(JSON.stringify(prevValue.newPost.info.details))
                        detailss.push("")
                        return({
                        ...prevValue,
                        newPost:{
                              isOpen:true,
                              info:{
                                    title:prevValue.newPost.info.title,
                                    topic:prevValue.newPost.info.topic,
                                    imgUrl:prevValue.newPost.info.imgUrl,
                                    details:detailss
                              }
                        }
            })})}>add details</Button>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        newPost:{
                              isOpen:false,
                              info:{
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))}} color="primary">
                  Cancel
            </Button>
            <Button onClick={addPost} color="primary">
                  Add
            </Button>
            </DialogActions>
      </Dialog>
      {/* Delete Post */}
      <Dialog
                  open={popup.del.isOpen}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={()=>setPopup(prevValue=>({
                        ...prevValue,del:{isOpen:false,id:""}
                  }))}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                  >
                  <DialogTitle id="alert-dialog-slide-title">{"Delete Post"}</DialogTitle>
                  <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  The post will be deleted! <br/>Are You Sure?
                  </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button onClick={()=>setPopup(prevValue=>({
                        ...prevValue,del:{isOpen:false,id:""}
                  }))} color="primary">
                        Cancel
                  </Button>
                  <Button onClick={deletePost} color="primary">
                        Yes
                  </Button>
                  </DialogActions>
      </Dialog>
      {/* Edit Post */}
      <Dialog 
            open={popup.edit.isOpen} 
            TransitionComponent={Transition} 
            onClose={()=>{
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        edit:{
                              isOpen:false,
                              info:{
                                    id:"",
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))}} 
                  aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
            <DialogContent>
            <DialogContentText>
                  Update the post
            </DialogContentText>
                  <img id="resim" src="#" alt="img" className="dropzone-img" />
                  <Dropzone
                  onDrop={handleDrop}
                  accept="image/*"
                  minSize={200}
                  maxSize={3072000}
                  >
                  {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Drag'n'drop images, or click to select files</p>
                  </div>
                  )}
                  </Dropzone>
                  <TextField
                        autoFocus
                        margin="dense"
                        value={popup.edit.info.title}
                        type="text"
                        name="title"
                        label="Title"
                        onChange={handlePost}
                        fullWidth
                  />
                  <TextField
                        autoFocus
                        margin="dense"
                        name="topic"
                        label="Topic"
                        value={popup.edit.info.topic}
                        onChange={handlePost}
                        type="text"
                        fullWidth
                  />
                  {
                        popup.edit.info.details.map((detail,index)=>{
                              return(
                                    <TextField
                                          key={index}
                                          autoFocus
                                          margin="dense"
                                          name="Detail"
                                          label={"Details " + (index+1)}
                                          value={detail}
                                          onChange={(e)=>handleDetails(index,e.target.value)}
                                          type="text"
                                          fullWidth
                                    />
                              )
                        })
                  }
                  
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{
                  setFile([])
                  setPopup(prevValue=>({
                        ...prevValue,
                        edit:{
                              isOpen:false,
                              info:{
                                    id:"",
                                    title:"",
                                    topic:"",
                                    imgUrl:"",
                                    details:[]
                              }
                        }
                  }))}} color="primary">
                  Cancel
            </Button>
            <Button onClick={editPost} color="primary">
                  Save
            </Button>
            </DialogActions>
      </Dialog>
      </div>
      )
}


export default Posts