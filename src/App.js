import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import About from 'components/About';
import Contact from 'components/contact';
import Research from 'components/Research';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="research" element={<Research/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
