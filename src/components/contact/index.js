import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { EmailJSResponseStatus } from '@emailjs/browser';
import emailJs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default icon issue in React
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm  = useRef()


    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover'); // This class enables the hover effect
      }, 4000);

  // Cleanup (optional in this case, but correct for React)
  return () => clearTimeout(timer);
}, []);

    const sendEmail = (e) =>{
        e.preventDefault()
        emailJs
            .sendForm(
                'service_d88au1r',
                'template_8wn9kg2',
                refForm.current,
                'NxNGN316EMDc5qXVe'
            )
            .then(
                () => {
                    alert('Message succesfully sent')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message.')
                }
            )
    }
    return(
    <>
        <div className = "container contact-page">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o','n','t','a','c','t', ' ', 'm', 'e']}
                        idx={15}/> {/*This is to ensure a 1.5s delay*/}
                </h1>
                <p>
                    I am interested in anything related to Computer Science - especially things in which I can learn from. As a CS undergraduate student,
                    I am always seeking to grow in any aspect of the realm of Computer Science.
                </p>
                <div className='contact-form'>
                    <form ref = {refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className = 'half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required/>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className ='info-map'>
                Aiden Hunter,
                <br/>
                USA,
                <br/>
                University of California, Santa Barbara <br/>
                <span>aiden.huntt@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[34.4140, -119.8489]} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[34.4140, -119.8489]} icon={defaultIcon}>
                        <Popup>My university!</Popup>
                    </Marker>
                </MapContainer>
            </div>
            </div>
        <Loader type="pacman"/>
    
    
    </>
    )
}


export default Contact;