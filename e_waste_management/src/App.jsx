import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import Secondnav from './Components/SecondNav.jsx';
import Content from './Components/Content.jsx';
import Awareness from './Components/Awareness.jsx';
import Paragraph from './Components/Paragraph.jsx';
import Card from './Components/Card.jsx';
import Future from './Components/Future.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import ContactUs from './Pages/Contactus.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import './index.css';


const App = () => {
  return (
    <Router>
      <Nav />
      <Secondnav />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />
     
      </Routes>
    <Contact />
    <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <>
    <Content />
      <Paragraph />
      <Awareness />
      <Card />
      <Future />
    </>
  );
};



export default App;

