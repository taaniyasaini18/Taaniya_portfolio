import React, {useState} from 'react'
import Box from './Box.jsx';
import image from '../images/wp8986649.webp';
import './About.css';
import html_logo from '../images/HTML_logo.png';
import css_logo from '../images/CSS_logo.png';
import git_logo from '../images/git_hub_logo.png';
import java_logo from '../images/Java_logo.png';
import react_logo from '../images/react_logo.jpg';
import redux_logo from '../images/Redux_logo.jpg';
import js_logo from '../images/JS_logo.png';


const About = () => {

   return (
    <main>
       <div  style = {{ backgroundImage: `url(${image})` ,backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat: "no-repeat"   }}>
        <h2>Know Who I'M</h2>
        <div className="main-image">
        <img src={`${image}`} alt="Developer" />
        </div>
        <p>
          Hi Everyone, I am <span style={{color: '#a020f0', textDecoration: 'none'}}> Taaniya saini</span> from <span style={{color: '#a020f0', textDecoration: 'none'}}> Jabalpur , Madhya Pradesh </span>.<br/>
          I am currently employed as a senior software developer at L&T.<br/>
          I have completed B.Tech in Information Technology from Jabalpur Engineering College.
        </p>
        
        <div className="activities">
          <>Apart from coding, some other activities that I love to do!</>
          <ul>
            <li>Playing Games</li>
            <li>Writing Tech Blogs</li>
            <li>Travelling</li>
          </ul>
        </div>
        
       <div className="Profhead"> Professional Skillset </div>
       <ul className="skillset">
        <li> <img src={`${react_logo}`} alt="react" /> </li>
        <li> <img src={`${redux_logo}`} alt="redux" /> </li>
        <li> <img src={`${js_logo}`} alt="js" /> </li>
        <li> <img src={`${html_logo}`} alt="html" /> </li>
        <li> <img src={`${css_logo}`} alt="css" /> </li>
        <li> <img src={`${java_logo}`} alt="java" /> </li>
        <li> <img src={`${git_logo}`} alt="git" /> </li>
        </ul>
        </div>
      </main>




  )
}

export default About