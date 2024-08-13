import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/wp8986649.webp';
import './Projects.css'; 
import img1 from '../images/gym_fit_img.jpg'
import img2 from '../images/weather_forecast_app.jpg'

const Projects = () => {
  return (
    <div className="projects-container" style = {{ backgroundImage: `url(${image})` ,backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat: "no-repeat"  }}>
      <div className="heading">My Recent Work</div>
      <div className="projects">
        <div className="project-card">
        <img src={`${img1}`} alt="Developer" />
          <h6>Fitness App</h6>
          <p>
            The Gym Fit website is a responsive application built with React, Material-UI,
            JavaScript, and Bootstrap. It allows users to select a body part and receive targeted exercise recommendations.
            Each exercise includes detailed descriptions and images. The site features a modern
            intuitive interface with smooth transitions and hover effects for an enhanced user experience.
          </p>
          <div className="project-links">
            <Link to="https://github.com/taaniyasaini18/Fitness_app" className="btn" style={{backgroundColor:'blue' , color:'white'}}>Code</Link>
            <Link to="https://fitness-app-87i8.vercel.app/" className="btn" style={{backgroundColor:'blue' , color:'white'}}>Demo</Link>
          </div>
        </div>
        <div className="project-card">
        <img src={`${img2}`} alt="Developer" />
          <h6>Weather Forecast App</h6>
          <p>
            The Weather Forecast app is a dynamic web application built using React.js,
            Bootstrap, and CSS. It delivers accurate and up-to-date weather information with detailed hourly and daily forecasts for any location worldwide.
          </p>
          <div className="project-links">
            <button onClick={() => window.location.href = 'https://github.com/taaniyasaini18/Weather_Forecast-'} className="btn" style={{backgroundColor:'blue' , color:'white'}}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
