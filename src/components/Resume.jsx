import React from 'react';
import image from '../images/wp8986649.webp';
import CV from '../images/CV.jpg';
import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TaaniyaSaini_Resume.pdf'; // Ensure CV.pdf is in the public directory
    link.download = 'TaaniyaSaini_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    
    <div   style = {{ backgroundImage: `url(${image})` ,backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat: "no-repeat"  }}>
    <div className="cont">
    <button className="btn" style={{backgroundColor:"purple" , color:"white"}} onClick={handleDownload}> Download CV </button>
    <img src={`${CV}`} alt="Developer" />
    <button className="btn" style={{backgroundColor:"purple" , color:"white"}}onClick={handleDownload}> Download CV </button>
    </div>


    </div>
  )
}

export default Resume