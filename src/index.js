import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'; 

//import Home from './screens/home/Home'; 

import Login from './screens/login/Login'; 
//import Controller from './screens/Controller'; 

/*
ReactDOM.render(
    <span>
        Image Viewer
    </span>, 
    document.getElementById('root')
);*/ 


ReactDOM.render(<Login/>, document.getElementById('root')); 
//ReactDOM.render(<Controller/>, document.getElementById('root')); 
registerServiceWorker(); 
