import React, { useState,useEffect } from 'react'
import ProjectCard from './ProjectCard'

const ProjectType = (props) => {

    const projects_all = ["first","second","third","fourth","five","six"]
    const projects_react = ["first","second"]
    const project_rest = []
    const [project_state,changeProjectState] = useState([]);

    
    useEffect(() => {
        if(props.name == 'ALL'){
            changeProjectState(projects_all)
    }else if(props.name == 'REACTJS'){   
             changeProjectState(projects_react)
    }else{
        changeProjectState(project_rest)
    }
    }, [props.name])



    const outerDiv = {
        width : "100%",
        overflow : "hidden",
        minHeight : "100vh",
        padding : "5%",
        paddingLeft : "10%",
        paddingRight : "10%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexWrap : "wrap"
    }

    const projectComponent = {
        flexBasis : "33.333333%"
    }
    return (
        <div style = {outerDiv}>
            {
                project_state.map((project,index)=>(
                    <ProjectCard style = {projectComponent} name ={project}/>
                ))
            }
        </div>
    )
}

export default ProjectType
