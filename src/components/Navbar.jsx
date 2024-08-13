import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ padding: '14px 16px' ,  listStyleType: "none" , float:"left", textDecoration: "none" , color:"purple"}}>

            <li style ={{ float: "left",  padding: '14px 16px' }}>
            <Link style={{textDecoration: "none" , color:"white", fontSize:"25px"}} to='/' > Home </Link>
             </li>
             <li style ={{ float: "left" ,  padding: '14px 16px'}}>
            <Link  style={{textDecoration: "none" , color:"white" , fontSize:"25px"}}to='/About'> About</Link>
             </li>
             <li style ={{ float: "left" ,  padding: '14px 16px' }}>
            <Link style={{textDecoration: "none" , color:"white" , fontSize:"25px"}} to='/Resume'> Resume</Link>
             </li>
             <li style ={{ float: "left",  padding: '14px 16px' }}>
            <Link style={{textDecoration: "none" , color:"white", fontSize:"25px"}} to='/Projects'> Projects </Link>
             </li>
             <li style ={{ float: "left",  padding: '14px 16px' }}>
            <Link style={{textDecoration: "none" , color:"white", fontSize:"25px"}} to='/Connect'> Connect </Link>
             </li>


    </div>
  )
}

export default Navbar