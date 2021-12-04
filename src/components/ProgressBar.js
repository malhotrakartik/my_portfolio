import React from 'react'
import { useEffect,useState } from 'react';
import '../App.css'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const [precentage,setPercentage] = useState(completed);
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 5
    }



    var myElement = document.getElementById('my-element');
    console.log(myElement);
    // var bounding = myElement.getBoundingClientRect()

// if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

//     console.log('Element is in the viewport!');
// } else {

//     console.log('Element is NOT in the viewport!');
// }

    const clickHandler = () => {
           setPercentage(completed);
    }

    // useEffect(clickHandler,[]);


  
    const fillerStyles = {
      height: '100%',
      width: `${precentage}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }

   




  
    const labelStyles = {
      padding: 1,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div className = "insideProgress" onMouseOver = {clickHandler} style={containerStyles}>
        <div style={fillerStyles}>
          <span  style={labelStyles}>{`${precentage}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
