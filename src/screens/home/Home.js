import React, {Component} from 'react'; 
import './Home.css'; 
import Header from '../../common/header/Header'; 

class Home extends Component{

    render(){      
       
        return (
            <div> 
                <Header/>
                <span>HomePage</span> 
            </div>
        )
    }
}

export default Home; 