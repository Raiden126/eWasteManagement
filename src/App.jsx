import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'
import Nav from './components/Nav.jsx';
import Secondnav from './components/SecondNav.jsx';
import Content from './components/Content.jsx';
import Awareness from './components/Awareness.jsx';
import Paragraph from './components/Paragraph.jsx';
import Card from './components/Card.jsx';
import Future from './components/Future.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ContactUs from './pages/Contactus.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

const App = () => {

  return (
    <>
      <Router>
        <Nav />
        <Secondnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/buyer' element = {<Landing />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </>
  )
}

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

export default App