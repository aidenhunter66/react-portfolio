
import { Link } from 'react-router-dom';
//import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from 'components/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faGithubSquare, faLinkedin, faReact, faStackOverflow, faUsb } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

//The arrow function is how to define a react component

//Letter class is the default className for animated letters.


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=[' ', 'A', 'i', 'd', 'e', 'n']
    const jobArray= ['A', ' ', 'C', 'S', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']


useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover'); // This class enables the hover effect
  }, 4000);

  // Cleanup (optional in this case, but correct for React)
  return () => clearTimeout(timer);
}, []);

    return (
        <>

        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>     
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>I am currently a second year CS student at University of California Santa Barbara. I take passion in innovating and creating new things.</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faUsb} color = "DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faStackOverflow } color = "#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGithubSquare} color = "#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color = "#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faLinkedin} color = "EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color = "EC4D28" />
                    </div>
                </div>

            </div>



        </div>
        <Loader type= "pacman"/>
        </>
    );

};

export default Home