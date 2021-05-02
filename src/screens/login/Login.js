import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import './Login.css'; 
import Header from '../../common/header/Header'; 

import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 

import FormControl from '@material-ui/core/FormControl'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import Input from '@material-ui/core/Input';  
import Button from '@material-ui/core/Button'; 
import Home from '../home/Home';
import userData from '../../common/userData'; 


class Login extends Component{
    constructor(){
        super(); 
        this.state={
            usernameRequired: "dispNone", 
            username: "", 
            passwordRequired: "dispNone", 
            password:"", 
            incorrectUsernamePassword: "dispNone", 
            allFieldsCorrect: "no", 
        }
    }

    inputUsernameChangeHandler = (e) =>{
      e.target.value !== " " && e.target.value !== null ?   this.setState({username: e.target.value}): this.setState({usernameRequired: "dispBlock"});       
    }    

    inputPasswordChangeHandler = (e) =>{
       this.setState({password: e.target.value}); 
    }

    loginClickHandler = () =>{
          this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"}); 
          this.state.password === "" ? this.setState({passwordRequired: "dispBlock" }) : this.setState({passwordRequired: "dispNone"}); 

          this.state.username !=="" && this.state.password !== "" ? this.setState({allFieldsCorrect: "yes"}) : this.setState({allFieldsCorrect: "no"});
          
          if(this.state.allFieldsCorrect === "yes"){
              ReactDOM.render(<Home currentusername={this.state.username}/>, document.getElementById('root')); 
          }
    }

    render(){
        return (
            <div> 
                <div className="hdr">
                <Header flag="loginPage"/>
                </div>
                <div className="body"> 
                    <Card className="card-style">
                        <CardContent className="card-cnt">
                            <span className="login-title"> <h2>LOGIN </h2></span>
                            <br/>
                        <FormControl className="input-fields" required>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                            <FormHelperText className={this.state.usernameRequired}> 
                                <span className="red"> required </span>
                            </FormHelperText>
                        </FormControl><br/> <br/>
                        <FormControl className="input-fields" required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red"> required </span>
                            </FormHelperText>
                            <FormHelperText className={this.state.incorrectUsernamePassword}>
                                <span className="red"> Incorrect username and/or password </span>
                            </FormHelperText>
                        </FormControl><br/><br/>  
                        <FormControl> 
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler} className="login-btn">Login</Button>
                        </FormControl> <br/><br/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ); 
    }
}


export default Login; 