import React, {Component} from 'react'; 
import './Home.css'; 
import Header from '../../common/header/Header'; 

//import userData from '../../common/userData'; 
//import imageData from '../../common/imageData'; 
//import imageCaption from '../../common/imageCaption'; 

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
import { useLocation } from 'react-router';



class Home extends Component{

  constructor(props){
    super(props); 
    this.state={
          username: "",
          imageid:"", 
          cmt: "",
      commentArray: [{
        username: "",
        imageid:"", 
        cmt: ""
      }], 
      dataRetrieved: props.dataRetrieved, 
      accessToken: props.accessToken,
      imageData:[{
        id: "",
        media_type: "",
        media_url: "",
        username: "",
        timestamp: ""
      }],   
    
     imageCaptionData:[{
          id: "", 
          caption:""
        }]  
    
    }
  }


  componentWillMount(){
    if(this.props.dataRetrieved !=="true")
    {
    this.setState({imageCaptionData: this.props.imageCaptionData}); 
    let accessTkn = this.props.accessToken; 
    let that = this; 

    that.props.imageCaptionData.map(icd =>{      
      if(icd.id !=="" && icd.id!== null && icd.id!==undefined)
      {
                  let imgId = icd.id; 

                  let imgDataUrl = "https://graph.instagram.com/"+ imgId +"?fields=id,media_type,media_url,username,timestamp&access_token="+accessTkn;             

                  let imgdata = null; 
                  let imgXhr = new XMLHttpRequest(); 

                  imgXhr.addEventListener("readystatechange", function(){
                        if(this.readyState === 4){
                          var imgdetails = that.state.imageData.concat(JSON.parse(this.responseText)); 
                          that.setState({imageData : imgdetails}); 
                        }
                  });

                  imgXhr.open("GET",imgDataUrl);
                  imgXhr.setRequestHeader("Cache-Control","no-cache");
                  imgXhr.send(imgdata);    
     } }); 
    }
  }
 

/* generateCaption = (props) =>{
   //let that = this; 
  var c  = this.state.imageCaptionData.filter((img)=>{return(img.id===props.a)})[0].caption; 
  return c; 
}*/ 

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
                <Header flag="homePage"  currentusername={this.props.currentusername} accessToken={this.props.accessToken} imageData={this.state.imageData} imageCaptionData={this.props.imageCaptionData} commentArray={this.state.commentArray} dataRetrieved="true"/>
              </div>
              <div className="home-body">
              <div className="grid-root">
                 
                <GridList cellHeight={800} cols={2} className="grid-list">
                    
                {this.state.imageData.map(image => (
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
                              <span className="caption"> </span>
                              <span className="hash">#hashtag1 #hastag2 #hashtag3</span>
                              <span className="like"> <FavoriteBorderOutlinedIcon fontSize="large"/> <span > likes </span></span>
                              <div className="comments" id="allcomments"> 
                              <ul>
                                {
                                  this.state.commentArray.filter(c =>(c.imageid === image.id)).map((cObj) =>(
                                  <li><b>{cObj.username}</b> : {cObj.cmt} </li> ))             
                                } 
                              </ul>  
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