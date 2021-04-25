import React, {Component} from 'react'; 
import './Login.css'; 
import Header from '../../common/header/Header'; 
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardActions from '@material-ui/core/CardActions'; 
import Typography from '@material-ui/core/Typography'; 
import  {makeStyles} from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import Input from '@material-ui/core/Input';  
import Button from '@material-ui/core/Button'; 

/*const cardStyles = theme =>({
    root: {
        minWidth: 275,
      },
    formControl:{
        margin: theme.spacing.unit, 
        minWidth: 240, 
        maxWidth: 240
    }, 
    formTitle:{
        color: theme.palette.primary.light
    }
}); */ 
 
/**<span className= {classes.formTitle} > Login </span> */

const styles =  theme =>({
    root: {
        minWidth: 275, 
    }, 
    title: {
        fontSize: 14, 
    },

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     }
}); 

class Login extends Component{
   

    render(){
      const {classes} = this.props;

        return (
            <div> 
                <div className="hdr">
                <Header/>
                </div>
                <div className="body"> 
                    <Card className="card-style">
                        <CardContent className="card-cnt">
                            <span className="login-title"> <h2>LOGIN </h2></span>
                            <br/>
                        <FormControl className="input-fields" required>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input id="username" type="text"></Input>
                        </FormControl><br/> <br/>
                        <FormControl className="input-fields" required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type="password"></Input>
                        </FormControl><br/><br/>  
                        <FormControl> 
                            <Button variant="contained" color="primary">Login</Button>
                        </FormControl> <br/><br/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ); 
    }
}

Login.propTypes={
    classes: PropTypes.object.isRequired, 
}; 

export default Login; 