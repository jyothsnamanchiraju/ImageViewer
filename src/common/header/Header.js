import React, {Component} from 'react'; 
import './Header.css'; 

import Input from '@material-ui/core/Input'; 

import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select'; 
import InputLabel from '@material-ui/core/InputLabel';


class Header extends Component{ 
    constructor(){
        super(); 
        this.state={ 
            search: "",
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
    }

    selectLogoutHandler = () => {
        console.log("Logout selected"); 
    }  
    
   
    render(){    
        return(
            <div>
                <header> 
                <div className="app-header">
                    <div className="app-title"> Image Viewer </div> 
                    <div className="right">
                        <div className="search-box">
                            <SearchIcon/>
                            <Input id="search" type="text" search={this.state.search} placeholder="search" onChange={this.inputSearchChangeHandler}/>  
                        </div>
                        <div className="profile-icon">
                            <FormControl>
                                    <Select className="profile-select" id="openbtn" value={this.state.value} onChange={this.profileMenuHandler}>
                                        <option aria-label="None" value="" disabled></option>
                                        <option value="Profile" onClick={this.selectProfileHandler}> Profile </option>
                                        <option value="Logout"  onClick={this.selectLogoutHandler}> LogOut </option>
                                    </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>          
                </header>   
            </div>   
        )
    }
} 

export default Header; 