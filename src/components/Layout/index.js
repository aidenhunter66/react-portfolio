import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () =>{
    return(
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className= 'tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout

/*The Layout component is where you set up the overall structure or "frame" of your website — things that should stay the same across all pages, like:

✅ Navbar / Sidebar
✅ Logo
✅ Footer
✅ Page wrapper divs
✅ Animations / layout containers
✅ And most importantly: <Outlet /> — where the page content will go

aka, the layout folder is like the house structure for the walls, with the common things shared amongst pages. hoever the rooms inside (individual pages) will be different)
*/