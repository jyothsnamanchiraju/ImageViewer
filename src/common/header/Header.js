import React, {Component} from 'react'; 
import './Header.css'; 
import Profile from '../../screens/profile/Profile'; 
import Login from '../../screens/login/Login'; 
import Home from '../../screens/home/Home'; 


import Input from '@material-ui/core/Input'; 

import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select'; 
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'; 

import ReactDOM from 'react-dom'; 


class Header extends Component{ 
    constructor(props){
        super(props); 
        this.state={ 
            search: "",
            dispflag:"dispNone", 
            value: "", 
            option:"",  
    } 

    }


    inputSearchChangeHandler = (e) =>{
        this.setState({search: e.target.value});       
      }    

    profileMenuHandler = (e) =>{
        this.setState({option: e.target.value})
    }
      
   selectProfileHandler = () =>{
            ReactDOM.render(<Profile  currentusername={this.props.currentusername} accessToken={this.props.accessToken} imageData={this.props.imageData} imageCaptionData={this.props.imageCaptionData} commentArray={this.props.commentArray} dataRetrieved={this.props.dataRetrieved}/>, document.getElementById('root')); 
    }

    selectLogoutHandler = () => {
        ReactDOM.render(<Login/>, document.getElementById('root')); 
    }  

    imageViewHandler = () =>{
        ReactDOM.render(<Home currentusername={this.props.currentusername} accessToken={this.props.accessToken} imageData={this.props.imageData} imageCaptionData={this.props.imageCaptionData} dataRetrieved={this.props.dataRetrieved}/>, document.getElementById('root')); 
    }
   /**
    * The <Header> element takes the property 'flag'
    * if this.props.flag is "loginPage", it indicates that the Header Element is invoked by Login.js
    * if this.props.flag is "homePage", it indicates that the Header Element is invoked by Home.js
    * if this.props.flag is "profilePage", it indicates that the Header Element is invoked by Profile.js
    */    

    render(){ 

        return(
            <div>
                <header> 
                <div className="app-header">
                    {
                        (this.props.flag ==="profilePage") 
                        ?
                            <div className="app-title"> <Button variant="contained" color="default" onClick={this.imageViewHandler}>Image Viewer </Button> </div> 
                        :    
                            <div className="app-title"> Image Viewer </div> 
                    }
                    <div  id="right" className="right">
                        {
                        (this.props.flag ==="homePage") 
                        ? 
                            <div className="search-box" style={{display: 'block'}}>
                                <SearchIcon/>
                                <Input id="search" type="text" search={this.state.search} placeholder="search" onChange={this.inputSearchChangeHandler}/>  
                            </div>
                        :    
                            <div></div>
                        }
                        {
                        (this.props.flag ==="homePage") 
                        ? 
                            <div className="profile-icon" style={{display: 'block'}}>
                                <FormControl>
                                        <Select className="profile-select" id="openbtn" value="Profile" defaultValue={'DEFAULT'} onChange={this.profileMenuHandler}>
                                            <option value="DEFAULT" disabled> Choose </option>
                                            <Divider/>
                                            <option value="Profile" onClick={this.selectProfileHandler}> Profile </option>
                                            <Divider/>
                                            <option value="Logout"  onClick={this.selectLogoutHandler}> LogOut </option>
                                        </Select>
                                </FormControl>
                        </div>
                        : (this.props.flag ==="profilePage") 
                        ?
                            <div className="profile-icon" style={{display: 'block'}}>
                                <FormControl>
                                        <Select className="profile-select" id="openbtn" value="Logout" onChange={this.profileMenuHandler}>
                                            <option value="Logout"  onClick={this.selectLogoutHandler}> LogOut </option>
                                        </Select>
                                </FormControl>
                            </div>
                        :
                            <div></div>
                        }
                    </div>     
                </div>          
                </header>   
            </div>   
        )
    }
} 

export default Header; 