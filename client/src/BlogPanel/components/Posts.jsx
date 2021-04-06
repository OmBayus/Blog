import React,{useState} from 'react';

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

const Posts = ()=>{

      const classes = useStyles();

      const [popup,setPopup] = useState({
            del:false,
            edit:{
                  isOpen:false,
                  info:{
                        title:"",
                        topic:"",
                        imgUrl:"",
                        details:["1","2"]
                  }
            }
      })
      

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
            const temp = popup.edit.info.details
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



      const deletePost = ()=>{
            console.log(popup)
      }

      const editPost = ()=>{
            console.log(popup)
      }




      return(
      <div><Container fluid className={style.Posts}>
            <Row>
            {
                  db.map(item=>(
                  <Col md={3} key={item.id}>
                        <Card className={classes.root}>
                              <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={"http://localhost:4000/uploads"+item.imgUrl}
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
                                          ...prevValue,del:true
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
      {/* Delete Post */}
      <Dialog
                  open={popup.del}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={()=>setPopup(prevValue=>({
                        ...prevValue,del:false
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
                        ...prevValue,del:false
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
            onClose={()=>setPopup(prevValue=>({
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
                  }))} 
                  aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
            <DialogContent>
            <DialogContentText>
                  Update the post
            </DialogContentText>
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
            <Button onClick={()=>setPopup(prevValue=>({
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
                  }))} color="primary">
                  İptal
            </Button>
            <Button onClick={editPost} color="primary">
                  Gönder
            </Button>
            </DialogActions>
      </Dialog>
      </div>
      )
}


export default Posts