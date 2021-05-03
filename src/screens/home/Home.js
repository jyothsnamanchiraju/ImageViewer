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
import { InputLabel } from '@material-ui/core';


class Home extends Component{

  constructor(){
    super(); 
    this.state={
          username: "",
          imageid:"", 
          cmt: "",
      commentArray: [{
        username: "",
        imageid:"", 
        cmt: ""
      }]  
      
    }
  }


 generateCaption = (props) =>{
  var c = imageCaption.data.filter((img)=>{return(img.id===props.a)})[0]; 
  return c.caption; 
}

addCommentHandler =() =>{
  let commentObj={username: "", imageid:"", cmt:"" };
  commentObj.username= this.state.username; 
  commentObj.imageid = this.state.imageid; 
  commentObj.cmt= this.state.cmt; 
 
  this.setState({commentArray: [...this.state.commentArray, commentObj]}); 
  this.setState({cmt: ""}); 
}

newCommentHandler =  (e) =>{
  
  this.setState({username: this.props.currentusername, imageid: e.target.id, cmt: e.target.value }); 
}

    render(){      

        return (
            <div> 
              <div className="home-hdr">
                <Header flag="homePage"  currentusername={this.props.currentusername} commentArray={this.state.commentArray}/>
              </div>
              <div className="home-body">
              <div className="grid-root">
                 
                <GridList cellHeight={800} cols={2} className="grid-list">
                    
                {imageData.filter(i => i.username ===this.props.currentusername).map(image => (
                        <GridListTile key={image.id}>
                          <Card className="card-root">
                            <CardHeader
                                avatar={
                                  <Avatar aria-label="cardheader" className="avatar" 
                                  style={{color: 'theme.palette.getContrastText(deepPurple[500])', 
                                    backgroundColor: '#734FB1', width:'60px', height:'60px'}}>
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
                              <div className="comments" id="allcomments"> 
                                {
                                  this.state.commentArray.filter(c =>(c.imageid === image.id)).map((cObj) =>(
                                  <li><b>{cObj.username}</b> : {cObj.cmt} </li> ))             
                                } 
                              </div>
                              <div> 
                              <FormControl className="add-comment"> 
                                  <InputLabel htmlFor={(image.id)+ "comment"}></InputLabel>
                                  <Input id={(image.id)} size={80} type="text" value ={this.state.cmt} placeholder="Add a comment" onChange={this.newCommentHandler}/>
                                  <Button id={(image.id)}className="cmt-btn" variant="contained" color="primary" onClick={this.addCommentHandler}>Add</Button>
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