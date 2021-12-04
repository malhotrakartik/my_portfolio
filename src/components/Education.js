import React from 'react'
import AboutCard from './AboutCard'

const Education = () => {
    const outerAboutDiv = {
         height : "90vh",
         widht : "100vw",
         backgroundColor : "#fff"
    }

    const headingDiv = {
        height : "30%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        fontSize : "3rem",
        fontStyle : "bold",
        
    }

    const cardHolder = {
        widht : "100%",
        height  : "70%",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        padding :  "auto"

    }




    return (
        <div style = {outerAboutDiv} id = "education">
            <div style = {headingDiv}><span style = {{        borderBottom: "3px solid black",
        paddingBottom  : "2px"}}>EDUCATION</span>
            </div>
            <div style = {cardHolder}>
                <div><AboutCard/></div>
                <div><AboutCard/></div>
                
            </div>
            <div></div>
        </div>
    )
}

export default Education
