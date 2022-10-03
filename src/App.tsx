import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import LandingView from './components/LandingView';
import Board from './components/Board';
import Events from './components/Events';
import QuickLinksPage from './components/QuickLinksPage';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const screenWidth = window.screen.width;
  const navbar = (screenWidth >= 500) ? <NavBar /> : <ResponsiveNavbar />;

  return (
    <div className="App">
      {navbar}
      <LandingView />
      <Board />
      <div className="separator" />
      <Events />
      <div className="separator" />
      <QuickLinksPage />
      <div className="separator" />
      <GetInvolved />
      <div className="separator" />
      <Footer />
    </div>
  );
}

export default App;
