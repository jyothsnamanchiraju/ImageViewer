import React, {Component} from 'react'; 
import './Home.css'; 
import Header from '../../common/header/Header'; 

import userData from '../../common/userData'; 
import imageData from '../../common/imageData'; 
import imageCaption from '../../common/imageCaption'; 

import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import FormControl from '@material-ui/core/FormControl'; 
import Input from '@material-ui/core/Input'; 

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Button from '@material-ui/core/Button'; 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'; 


class Home extends Component{

  constructor(){
    super(); 
    this.state={
      loggedinUsername : "", 
    }
  }

 generateCaption = (props) =>{
  var c = imageCaption.data.filter((img)=>{return(img.id===props.a)})[0]; 
  return c.caption; 
}
    render(){      
      
        return (
            <div> 
              <div className="home-hdr">
                <Header flag="homePage"/>
              </div>
              <div className="home-body">
              <div className="grid-root">
                 
                <GridList cellHeight={800} cols={2} className="grid-list">
                    
                      {imageData.map(image => (
                        <GridListTile key={image.id}>
                          <Card className="card-root">
                            <CardHeader
                                avatar={
                                  <Avatar aria-label="cardheader" className="avatar">
                                   {image.username}
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title={image.username}
                                subheader={image.timestamp}
                              />
                             
                            <CardContent className="card-content">
                                <CardMedia
                                  className="media"
                                  image={image.media_url}
                                  title="image"
                                />  
                              <span className="caption"> <this.generateCaption a={image.id}/></span>
                              <span className="hash">#hashtag1 #hastag2 #hashtag3</span>
                              <span className="like"> <FavoriteBorderOutlinedIcon fontSize="large"/> <span > likes </span></span>
                              <div className="comments" id="allcomments"> </div>
                              <div> 
                                <FormControl className="add-comment"> 
                                  <Input placeholder="Add a comment"></Input>
                                  <Button className="cmt-btn" variant="contained" color="primary">Add</Button>
                                </FormControl>
                              </div>
                            </CardContent>
                          </Card>  
                          </GridListTile>
                    ))}  
               </GridList>
              </div>
              </div>
            </div>
        )
    }
}

export default Home; 