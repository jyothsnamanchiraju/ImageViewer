import React, {Component} from 'react'; 
import './Header.css'; 
import Button from '@material-ui/core/Button'; 

class Header extends Component{ 
    render(){
        return(
            <div>
                <header className="app-header"> 
                        <div> 
                            <span className="app-title"> Image Viewer </span> 
                        </div>
                </header>   
            </div>   
        )
    }
} 

export default Header; 