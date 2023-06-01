import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, withRouter } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/MyNavbar.css';


// components
import MyNavbar from './MyNavbar';
import LandingPage from './LandingPage';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Packages from './Packages';
import Bikes from './Bikes';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <MyNavbar />
        <ScrollToTop />
        <Routes>

          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/bikes" element={<Bikes />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          {/* <Route exact path='*' element={<Not />} /> */}
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
