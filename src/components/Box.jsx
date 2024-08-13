import React, {useState} from 'react'

const Box = () => {

    const [hoveri, sethoveri] = useState(false);

    const handleMouseEnter = () => {
        console.log("Inside")
        sethoveri(true)
      };

    const handleMouseExit=()=>{
        console.log("outside")
        sethoveri(false)
    };

  return (
    <div style={{width: '200px',
    height: '200px',
    backgroundColor: 'lightblue',
    border: '2px solid blue',
    borderRadius: '5px',
    padding: '20px',
    transition: 'transform 0.2s ease',
    transform: hoveri ? 'scale(1.2)' : 'scale(1)'}} 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseExit}>    this is box


    </div>
  )
}

export default Box