import React from 'react'
import { useState,useEffect } from 'react';
import ProgressBar from './ProgressBar'
import profileImage from '../image/profile_pic.jpg'

const About = () => {

   const [userData , changeUserData] = useState({});
   
    const outerDiv = {
        height : "100vh",
        width : "100vw",
        backgroundColor : "#f5f5f5"
    }

    const headingDiv = {
        height : "20%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        fontSize : "3rem",
        fontStyle : "bold",
        
    }

    const skillsHolder = {
       height : "80%",
       width : "100%",
       display : "flex",
       
      

    }

    const skillAbout = {
        width : "50%",
         height : "100%",
         display : "flex",
         flexDirection : "column",
         justifyContent : "center",
       alignItems : "center"
    }

    const skillBar = {
         width : "50%",
         height : "100%",
         backgroundColor :"white"
         ,display : "flex",
         justifyContent : "space-between",
         alignItems : "center",
         flexDirection : "column",
         padding : "5rem"
    }

    const aboutPhoto = {
          height : "200px",
          width : "200px"
    }

    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
      ];

      useEffect(() => {
        fetch('http://localhost:4000/userDetails')
        .then(response => response.json())
        .then(data => {
            changeUserData(data);
        });
      }, [])


      useEffect(()=>{
        console.log(userData);
      },[userData])
      



    return (
        <div style = {outerDiv} id = "about">
            <div style = {headingDiv}><span style = {{        borderBottom: "3px solid black",
        paddingBottom  : "2px"}}>ABOUT</span></div>
                <div style = {skillsHolder}>
                <div style = {skillAbout}>
                    <div style = {aboutPhoto}><img src = {userData.myDetails.proImage} height = "150" width = "150"/></div>
                    <div>Who's This Guy</div>
                    <div>{userData.myDetails.desc}</div>
                </div>
                <div style = {skillBar} >
                 
                {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
                </div>
            </div>
        </div>
    )
}

export default About
