import React, { useEffect, useState } from 'react';
import {Switch, Route,Link} from "react-router-dom"
import Cookies from 'js-cookie'
import axios from "axios"
import {Redirect} from "react-router-dom"

//Components
import Main from "../components/Main"
import Posts from "../components/Posts"
import Comments from "../components/Comments"
import Author from "../components/Author"

//Material Ui
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const url = "http://localhost:4000/api/"

export default function Panel() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  

  const [auth,setAuth] = useState(true)
  const [loading,setLoading] = useState({isloading:true,message:"Cevap Bekleniyor..."})

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Auth = async ()=>{
    let token = Cookies.get("token")
    
    const res = await axios.post((url+"user/auth"),{token:token})
    .catch(err=>{
      console.log(err)
    })

    if(res){
      if(res.data.auth){
        setAuth(true)
        setLoading({isloading:false})
      }
      else{
        setAuth(false)
        setLoading({isloading:false})
      }
    }
    else{
      setLoading({isloading:true,message:"Serverdan cevap alınamıyor!"})
    }
    
  }

  useEffect(()=>{
    Auth()
  },[])

  if(loading.isloading){
    return(<div>
    <h1>{loading.message}</h1>

    </div>)
  }
  else{

    return (
      <div className={classes.root}>
        {!auth && <Redirect to="/login" />}
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <Link to="/panel/" style={{color:'black'}}>
                    <ListItem button>
                          <ListItemIcon><EqualizerIcon /></ListItemIcon>
                          <ListItemText primary={"MainPage"} />
                    </ListItem>
              </Link>
          </List>
          <Divider />
          <List>
              <Link to="/panel/posts" style={{color:'black'}}>
                    <ListItem button>
                          <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                          <ListItemText primary={"Posts"} />
                    </ListItem>
              </Link>
              <Link to="/panel/comments" style={{color:'black'}}>
                    <ListItem button>
                          <ListItemIcon><ChatIcon /></ListItemIcon>
                          <ListItemText primary={"Comments"} />
                    </ListItem>
              </Link>
          </List>
          <Divider />
          <List>
              <Link to="/panel/author" style={{color:'black'}}>
                    <ListItem button>
                          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                          <ListItemText primary={"Author"} />
                    </ListItem>
              </Link>
          </List>
          <List>
              <Link to="/" onClick={()=>{Cookies.remove('token')}} style={{color:'black'}}>
                    <ListItem button>
                          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                          <ListItemText primary={"Logout"} />
                    </ListItem>
              </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
              <div className={classes.drawerHeader} />
              <Switch>
                    <Route path="/panel/" exact>
                      <Main/>
                    </Route>

                    <Route path="/panel/posts" exact>
                      <Posts/>
                    </Route>

                    <Route path="/panel/comments">
                      <Comments/>
                    </Route>

                    <Route path="/panel/author">
                      <Author/>
                    </Route>

                    <Route path="/panel/posts/:id">
                    SA
                    </Route>
              </Switch>
        </main>
      </div>
    );
  }
}
