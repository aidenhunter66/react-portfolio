import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';


const Research = () => {

     const [letterClass, setLetterClass] = useState('text-animate')
        const refForm  = useRef()
    
    
        useEffect(() => {
          const timer = setTimeout(() => {
            setLetterClass('text-animate-hover'); // This class enables the hover effect
          }, 4000);
    
      // Cleanup (optional in this case, but correct for React)
      return () => clearTimeout(timer);
    }, []);

    return(
        <>
        <div className = 'container research-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray = {['R', 'e', 's', 'e', 'a', 'r', 'c', 'h']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am currently awaiting a response from Professors about doing research. I plan to do research during my sophomore and pherhaps later years.
                </p>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
  
    )
}


export default Research;