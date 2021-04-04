import React from 'react';

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Bootstrap
import {Container,Row,Col} from "react-bootstrap"

//style
import style from "../styles/Posts.module.css"

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
      return(
      <Container fluid className={style.Posts}>
            <Row>
            {
                  [1,2,3,4,5].map(item=>(
                  <Col md={3} key={item}>
                        <Card className={classes.root}>
                              <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="http://localhost:4000/uploads/default.webp"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Title
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                              </CardActionArea>
                              <CardActions>
                                    <Button size="small" color="primary">
                                    Edit
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Delete
                                    </Button>
                              </CardActions>
                        </Card>
                  </Col>
                  ))   
            }
            </Row>
      </Container>)
}


export default Posts