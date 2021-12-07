import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';



const FirstPage = () => {
    const mystyle = {
        height : "100vh",
        width : "100vw",
        backgroundColor : "black",
        display : "flex",
        justifyContent  : "center",
        paddingTop : "35vh"

      };

      const textButton = {
            height : "40px"
            ,widht : "120px",
            marginTop : "1.8rem",
            color : "#fff",
            borderColor : "#fff"
      }

      const outerDiv = {
          height : "50vh",
          width : "70vw",
          display : "flex",
          alignItems : "center",
          flexDirection : "column"

      }

      const textDiv = {
          fontSize : "2.5rem"
          ,color : "#fff"
      }
      
    


    return (
        <div style = {mystyle} id="home">
            <div style = {outerDiv}>
            <div style={textDiv}>Hello, I'm <span style={{color : "red"}}>Kartik Malhotra</span>.<br/>I'm a full stack Web Developer.</div>
            <Button style = {textButton}variant = "outlined">View my work</Button>
            </div>
           
        </div>
    )
}

export default FirstPage