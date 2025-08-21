import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import profilePicture from '../../assets/images/picture.jpg'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover'); // This class enables the hover effect
  }, 4000);

  // Cleanup (optional in this case, but correct for React)
  return () => clearTimeout(timer);
}, []);
     

    return(

    <>

        <div className='container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am currently a second year student at the University of California, Santa Barbara studying computer science. 
                I am looking to get an internship or research position to sharpen my computer science knowledge and skills to prepare me for industry.
                </p>
                <p>
                I am a naturally curious individual with a passion to innovate and create new things. I am constantly looking to 
                magnify my knowledge in the realm of technology.
                </p>
                <p>
                I have used C++, Java, Python, HTML, and Java Script. My current main language I am using right now is C++.
                I also have limited experience using React, MongoDB, Node.js, and Figma.
                </p>
            </div>
            
                <div className = 'profile-picture'>
                    <img src={profilePicture} alt="aiden"/>
                </div>
        </div>
        <Loader type="pacman" />
    
    </>
    )
}

export default About;