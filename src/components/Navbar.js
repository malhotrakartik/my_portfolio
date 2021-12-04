import React , {Component,useState,useEffect} from 'react';
import {Link} from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },

  active : {
    color : "red"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const navBarStyle = {
      backgroundColor : "#616161",
      display : "flex",
      flexDirection : "row"

  }

  const toolBarStyle = {
      width : "60%",
      height : "100%",
      display : "flex",
      justifyContent : "space-around"
      ,fontSize : "0.5rem"
  }

  const handleNavClick = (event) => {

        const ele = (document.getElementsByClassName('active-nav')[0]);
        ele.classList.remove('active-nav');
        event.target.classList.add('active-nav');

  }

  

  return (
    <div className={classes.root}>

      <AppBar className = "hello" position="fixed" style = {navBarStyle}>
        <Toolbar variant="dense" style = {toolBarStyle}>
          <Typography variant="h6" color="inherit">
          <Link   className = "active-nav" to = "home" smooth ={true} duration = {800} onClick = {handleNavClick}>HOME</Link>

          </Typography>
          <Typography variant="h6" color="inherit">
          <Link  to = "about" smooth ={true} duration = {800} onClick = {handleNavClick}>ABOUT</Link>

          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to = "education" smooth ={true} duration = {800} onClick = {handleNavClick}>EDUCATION</Link>


          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to = "experience" smooth ={true} duration = {800} onClick = {handleNavClick}>EXPERIENCE</Link>


          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to = "projects" smooth ={true} duration = {800} onClick = {handleNavClick}>PROJECTS</Link>


          </Typography>
          <Typography variant="h6" color="inherit">

            <Link to = "contact" smooth ={true} duration = {800} onClick = {handleNavClick}>CONTACT</Link>
            
          </Typography>
        </Toolbar>
        <div style = {{width : "40%",height : "100%"}}></div>
      </AppBar>
    </div>
  
  );
}

