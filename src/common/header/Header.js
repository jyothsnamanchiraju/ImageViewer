import React, {Component} from 'react'; 
import './Header.css'; 
import Profile from '../../screens/profile/Profile'; 
import Login from '../../screens/login/Login'; 
import Input from '@material-ui/core/Input'; 

import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select'; 

import ReactDOM from 'react-dom'; 


class Header extends Component{ 
    constructor(){
        super(); 
        this.state={ 
            search: "",
            dispflag:"dispNone", 
            value: "Profile", 
            option:""
    } 

    }

    inputSearchChangeHandler = (e) =>{
        this.setState({search: e.target.value});       
      }    

    profileMenuHandler = (e) =>{
        this.setState({option: e.target.value})
        console.log("option= " + this.state.option); 
    }
      
   selectProfileHandler = () =>{
        console.log("Profile selected");
            ReactDOM.render(<Profile/>, document.getElementById('root')); 
    }

    selectLogoutHandler = () => {
        console.log("Logout selected"); 
        ReactDOM.render(<Login/>, document.getElementById('root')); 
    }  
       

    render(){ 

        return(
            <div>
                <header> 
                <div className="app-header">
                    <div className="app-title"> Image Viewer </div> 

                    <div  id="right" className="right">
                        {
                        (this.props.flag ==="loginPage") 
                        ? 
	                        <div className="search-box" style={{display: 'none'}}>
                                <SearchIcon/>
                                <Input id="search" type="text" search={this.state.search} placeholder="search" onChange={this.inputSearchChangeHandler}/>  
                            </div>
                        :    
                            <div className="search-box" style={{display: 'block'}}>
                                <SearchIcon/>
                                <Input id="search" type="text" search={this.state.search} placeholder="search" onChange={this.inputSearchChangeHandler}/>  
                            </div>
                        }
                        {
                        (this.props.flag ==="loginPage") 
                        ? 
                        <div className="profile-icon" style={{display: 'none'}}>
                            <FormControl>
                                    <Select className="profile-select" id="openbtn" value={this.state.value} onChange={this.profileMenuHandler}>
                                        <option aria-label="None" value="" disabled></option>
                                        <option value="Profile" onClick={this.selectProfileHandler}> Profile </option>
                                        <option value="Logout"  onClick={this.selectLogoutHandler}> LogOut </option>
                                    </Select>
                            </FormControl>
                        </div>
                        :
                        <div className="profile-icon" style={{display: 'block'}}>
                            <FormControl>
                                    <Select className="profile-select" id="openbtn" value={this.state.value} onChange={this.profileMenuHandler}>
                                        <option aria-label="None" value="" disabled></option>
                                        <option value="Profile" onClick={this.selectProfileHandler}> Profile </option>
                                        <option value="Logout"  onClick={this.selectLogoutHandler}> LogOut </option>
                                    </Select>
                            </FormControl>
                        </div>
                        }
                    </div>     
                </div>          
                </header>   
            </div>   
        )
    }
} 

export default Header; 