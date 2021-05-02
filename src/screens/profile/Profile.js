import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import './Profile.css'; 
import Header from '../../common/header/Header'; 
import Button from '@material-ui/core/Button'; 
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import userData from '../../common/userData'; 
import imageData from '../../common/imageData'; 
import imageCaption from '../../common/imageCaption'; 

import EditIcon from '@material-ui/icons/Edit';
import GridList from '@material-ui/core/GridList'; 
import GridListTile from '@material-ui/core/GridListTile';
import Modal from '@material-ui/core/Modal'; 
import Input from '@material-ui/core/Input'; 
import { findByLabelText } from '@testing-library/dom';



class Profile extends Component{

    constructor(){
        super(); 
        this.state={
            editFullNamemodalOpen: false, 
            editImagemodalOpen: false, 
            imageObj: {},
            imageCaption: "",
            imageurl: "" 
        }
    }
    editUsernameHandler= ()=>{
        this.setState({editFullNamemodalOpen: true}); 
    }

    closeModalHandler= () =>{
        this.setState({editFullNamemodalOpen: false});
    }

   editImageHandler = (img) => {
     let iC= {}; 
     iC= imageCaption.data.filter((d)=>{return(d.id === img.id)})[0]; 
     this.setState({editImagemodalOpen: true, imageObj: img, imageCaption: iC.caption}); 
     
     
   } 

    closeImageModalHandler = () =>{
        this.setState({editImagemodalOpen: false});
    }
    render(){
        let loggedinUser = userData.filter((user)=>{return(user.username=== this.props.currentusername )})[0]; 
        
        const editNameModalBody = (
            <div className="disp-modal">
              <h2 id="modal-title" style={{alignItems:'center', margin:'10px'}}>Edit</h2>
              <div style={{margin:'10px'}}>
              <Input id="modal-content" type="text" placeholder="Full Name" onChange={this.editUserFullnameChangeHandler}>
              </Input>
              </div>
              <div style={{margin:'10px', alignItems:'center'}}>
              <Button variant="contained" color="primary"> Update </Button>
              </div>
            </div>
          );
         

        return (
        <div>
            <div className="profile-hdr">
                <Header flag="profilePage" currentusername={this.props.currentusername}/>
            </div>
            <div className="profile-body"> 
                    <div className="profile-information-section"> 
                        <div className="user-profile-pic">  
                                   <Avatar aria-label="cardheader" style= {{ width: "100px", height: "100px", color: "theme.palette.getContrastText(deepOrange[500])", backgroundColor: "#EC8167" }}>
                                   {loggedinUser.username}
                                  </Avatar> 
                        </div>
                        <div className="user-info">
                                <div className="username">{loggedinUser.username} </div>
                                <div className="user-info-numbers">
                                    <div> Posts:        </div>
                                    <div> Follows:      </div>
                                    <div> Followed By:  </div>
                                </div>
                                <div>
                                    <span>User Full Name</span>
                                    <Button variant="fab" color="secondary" aria-label="edit" onClick={this.editUsernameHandler}>
                                    <EditIcon />
                                    </Button>
                                    <div>
                                    <Modal open={this.state.editFullNamemodalOpen} onClose={this.closeModalHandler}
                                    aria-labelledby="modal-title" aria-describedby="modal-content" 
                                    style={{display: 'flex', justifyContent:'center', margin:'20px' }}>
                                    {editNameModalBody}</Modal>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="profile-image-posts-grid">
                    <GridList cellHeight={180}  style={{ width: '80%', height: 'auto'}} >
                        {
                        imageData.filter(i => i.username=== loggedinUser.username).map((img) =>( 
                            
                                <GridListTile key={img.media_url} style={{margin: 0, width: '30%', height:'auto', marginRight:0, marginBottom:0}} value={img.id} onClick={()=> this.editImageHandler(img)}>
                                    <img src={img.media_url} alt="image" style={{height: '100%', width:'100%'}}/>   
                                </GridListTile>      
                            ))
                        }
                    </GridList>  
                    <div >                                
                        <Modal open={this.state.editImagemodalOpen} onClose={this.closeImageModalHandler}
                                aria-labelledby="image-content" aria-describedby="image-details" 
                                style={{display: 'flex', justifyContent:'center', margin:'5px'}}>
                                
                            <div className="image-modal">
                                    <div style={{width:'50%'}}>
                                    <img src={this.state.imageObj.media_url} id="image-content" style={{alignItems:'start', margin:'10px', marginRight: 0, width:'90%', height:'90%'}}/>
                                    </div>
                                    <div id= "image-details" style={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start', margin:'5px', marginLeft: 0, width:'50%'}}>
                                        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'space-between'}}>
                                           <Avatar style= {{ width: '50px', height: '50px', color: 'theme.palette.getContrastText(deepPurple[500])', backgroundColor: '#734FB1'}}> 
                                                {this.state.imageObj.username}
                                           </Avatar>
                                           <h4> {this.state.imageObj.username}</h4>
                                        </div>   
                                        <div>
                                            <Divider/>
                                            <div style={{fontSize: '25px'}}> {this.state.imageCaption} </div>
                                            <div style={{color:'#64D4E3', fontSize:'15px'}}> #hashtags </div>
                                            <div style={{width:'100%', height:'90%'}}>
                                                <span> {this.state.imageObj.username}:  </span>
                                                <span>comments</span>
                                            </div>
                                            <div>
                                            <FavoriteBorderOutlinedIcon fontSize="large"/> <span > likes </span>
                                            </div>
                                            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                                <Input id="addcomment" placeholder="Add a comment" type="text"></Input>
                                                <Button variant="contained" color="primary">Add</Button>
                                            </div>
                                        </div>    
                                    </div>
                            </div>
                        </Modal>
                    </div>  
                    </div>
            </div>
        </div>
        )
    }

}

export default Profile; 