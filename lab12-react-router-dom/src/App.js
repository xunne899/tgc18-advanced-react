
import React from 'react'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import SubmittedForm from './pages/SubmittedForm';
import PostPage from './pages/PostPage';

function App() {
  return(<React.Fragment>
    <Router>
      <nav>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<AboutUs/>}/>
  <Route path="/contact" element={<ContactUs/>}/>  
  <Route path="/form-submitted" element={<SubmittedForm/>}/>  
  <Route path="/posts" element={<PostPage/>}/>  
</Routes>
      </nav>


    </Router>
    
    </React.Fragment>
    ) 
  ;
}

export default App;
