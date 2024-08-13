import react from 'react'
import image from '../images/wp8986649.webp';
import image1 from '../images/Untitled design (1).png';
import Typewriter from 'typewriter-effect';
import image2 from '../images/Untitled design (2).png';

const Mainpage = () => {
  return (
    
    <div  style = {{ backgroundImage: `url(${image})` ,backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat: "no-repeat"  }}>
    <div  style={{color:"white" , paddingTop: '250px' , paddingLeft: '100px' , fontSize:'50px' }} >
    <img style={{ float: "right" , paddingRight: '50px' , height:'300px'}} src={image1} alt="Description of the image"/>
    <Typewriter 
  options={{
    strings: [ 'नमस्ते', 'হ্যালো', 'హలో' , 'नमस्ते' ,'வணக்கம்' , 'નમસ્તે' , 'ಹಲೋ' , 'ഹലോ' , 'ਹੈਲੋ'],
    autoStart: true,
    loop: true,
  }}
/> 
     </div>  
     
     
     <p  style={{color:"white" , paddingTop: '5px' , paddingLeft: '100px' , fontSize:'40px' }}> I'M <span style={{ color: "purple" }}>TAANIYA SAINI</span> <br/> FrontEnd Developer</p>  
    

    <div style={{paddingLeft:'100px' , paddingTop:'350px' , color:"white" , fontSize:'50px'}}> LET ME INTRODUCE MYSELF<br/> <br/> </div>
    <img style={{ float: "right" , paddingRight: '50px' , height:'200px'}} src={image2} alt="Description of the image"/>
        <div style={{paddingLeft:'100px' , paddingTop:'5px' , color:"white" , fontSize:'23px'}} >
        A frontend enthusiast and code aficionado. <br/><br/>
        Armed with <span style={{ color: '#BFB9FA' }}> React, Redux </span> and the essentials of <span style={{ color: '#BFB9FA' }}> JavaScript, HTML, and CSS</span>.<br/> I shape digital landscapes with precision and finesse.<br/> <br/>
        From orchestrating state management with Redux to crafting elegant UIs with React , <br/> I thrive on the technical intricacies of frontend development.
</div> 

</div>
  )
}

export default Mainpage