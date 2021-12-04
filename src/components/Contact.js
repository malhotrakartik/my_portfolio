import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {animateScroll as scroll} from 'react-scroll'; //for smooth scrolling to top

import { LinkedIn } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';

import leetcodeLogo from '../image/leetcode_logo.png';

const useStyles = makeStyles({
  contactForm : {
       minHeight : "50vh",
       width : "40%",
  }
  ,
  inputStyle : {
        height : "40px",
        width : "100%"
        ,marginBottom : "10px"
  }
  ,
  textAreaStyle : {
        minHeight : "100px",
        width : "100%",
        marginBottom : "10px"
  }
  ,
  icons : {
      height :"30px",
      width : "30px",
      fontSize : "30px",
      color : "#fff"
  }
});

const Contact = () => {

    const classes = useStyles();

    const outerDiv = {
        height : "130vh",
        width : "100vw",
        backgroundColor : "#252934"
    }

    const headingDiv = {
        height : "20%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        color : "#fff",
        alignItems : "center",
        fontSize : "3rem",
        fontStyle : "bold",
        
    }

    const formDiv = {
            height : "50%",
            width : "100%",
            display : "flex",
            justifyContent : "center",
            paddingTop :  "50px",
            
            // alignItems : "center"
        
    }

    const buttonStyle = {
         height : "50px",
         width : "110px",
         border : "2px solid white",
         color : "white",
         backgroundColor : "transparent",
         fontWeight : "bold",
         float : "right"
    }

    const mediaDiv = {
        height : "25%",
        width : "100%",
        backgroundColor : "#1b242f",
        display : "flex",
        justifyContent : "center",
        paddingTop : "5rem"
    }

    const iconsHolder = {
        height : "40%",
        width : "30%",
        display : "flex",
        alignItems : "center",
        justifyContent : "space-around"
    }

    return (
        <div style = {outerDiv} id = "contact">
        <div style = {headingDiv}><span style = {{borderBottom: "3px solid white",
    paddingBottom  : "2px"}}>CONTACT</span>
    </div>
        <div style = {{width : "100%",height : "5%",textAlign : "center",color : "#04c2c9"}}><p>Have a question or want to work together?</p></div>
        <div style = {formDiv}>
             <form action = "" className = {classes.contactForm}>
              <input className = {classes.inputStyle} placeholder = "Name" type = "text" name = "name" required/>
              <input className = {classes.inputStyle} placeholder = "Enter Email" type = "email" name = "email" required/>
              <textarea className = {classes.textAreaStyle} placeholder = "Your Message" type = "text" name = "message" required/>
              <input type = "submit" value = "Submit" style = {buttonStyle}></input>
             </form>
        </div>
        <div style = {{display : "flex",justifyContent : "center"}}><button onClick = {()=>{
            scroll.scrollToTop()
        }}>Gototop</button></div>
        <div style = {mediaDiv}>
           <div style = {iconsHolder}>
                <LinkedIn className = {classes.icons}/>
                <GitHub className = {classes.icons}/>
                <Instagram className = {classes.icons}/>
                <Mail className = {classes.icons}/>

           </div>
        </div>
        </div>
    )
}

export default Contact
