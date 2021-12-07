import React,{useState} from 'react'
import ProjectType from './ProjectType';


const Projects = () => {

    var headings = ['ALL','REACTJS','NODEJS','ANDROID'];
    const [ptype,changeType] = useState("ALL")

    const outerDiv = {
        // height : "120vh",
        minHeight : "120vh",
        width : "100vw",
        backgroundColor : "#fff"
    }

    const headingDiv = {
        height : "30vh",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        fontSize : "3rem",
        fontStyle : "bold",
        
    }

    const projectsHolder = {
        height : "80%",
        width : "100%",
        display : "flex",
        flexDirection : "column",
    }

    const projectHeading = {
          height : "20%",
          width : "100%",
          display : "flex",
        
          justifyContent : "space-around",
          alignItems : "center",
          paddingLeft : "15%",
          paddingRight : "15%"
    }

    const projectHead = {
        fontSize : "1.2rem",
        fontWeight : "bold",
        border : "1px solid black",
        padding : "6px"
    }

    const mainProjects = {
        height : "80%",
        width : "100%",
    }

    const headingClickHandler = (event) => {
        changeType(event.target.innerText);
    }


    return (
        
            <div style = {outerDiv} id = "projects">
            <div style = {headingDiv}><span style = {{        
            borderBottom: "3px solid black",
            paddingBottom  : "2px"}}>PROJECTS</span>
            </div>
            <div style = {projectsHolder}>
                    <div style = {projectHeading}>
                         {
                           headings.map((heading,index)=>(
                               <span key={index} onClick = {headingClickHandler} style = {projectHead} id = {index}>{heading}</span>
                           ))
                         }
                    </div>
                    <div style = {mainProjects}>
                           <ProjectType name = {ptype}/>
                    </div>
            </div>
                    
            </div>
    )
}

export default Projects
