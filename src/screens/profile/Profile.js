import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import './Profile.css'; 
import Header from '../../common/header/Header'; 
import Button from '@material-ui/core/Button'; 
import Avatar from '@material-ui/core/Avatar';

import userData from '../../common/userData'; 
import imageData from '../../common/imageData'; 
import imageCaption from '../../common/imageCaption'; 

import GridList from '@material-ui/core/GridList'; 
import GridListTile from '@material-ui/core/GridListTile'; 
import { findByLabelText } from '@testing-library/dom';

class Profile extends Component{


    render(){
        let loggedinUser = userData.filter((user)=>{return(user.id==="1")})[0]; 
        
        return (
        <div>
            <div className="profile-hdr">
                <Header flag="profilePage"/>
            </div>
            <div className="profile-body"> 
                    <div className="profile-information-section"> 
                        <div className="user-profile-pic">  
                                   <Avatar aria-label="cardheader" className="orange">
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
                                     <Button> Edit </Button>
                                </div>
                        </div>
                    </div>
                    <div className="profile-image-posts-grid">
                    <GridList cellHeight={180}  style={{ width: '80%', height: 'auto'}} >
                        {
                        imageData.filter(i => i.username==="user1").map((img) =>( 
                                <GridListTile key={img.media_url} style={{margin: 0, width: '30%', height:'auto', marginRight:0, marginBottom:0}}>
                                    <img src={img.media_url} alt="image" style={{height: '100%', width:'100%'}}/>    
                                </GridListTile>
                            ))
                        }
                    </GridList>    
                    </div>
            </div>
        </div>
        )
    }

}

export default Profile; 