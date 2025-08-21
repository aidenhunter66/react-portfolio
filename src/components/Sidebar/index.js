import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/picture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faSuitcase, faBars, faClose, faLaptop } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="research-link" to="/research">
                <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/aidenhunter/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/aidenhunter66'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>



        </ul>
    </div>
)

export default Sidebar