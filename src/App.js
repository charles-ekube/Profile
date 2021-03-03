import React from 'react';
import Footer from './components/footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <Footer/>
    </>
  );
}

export default App;
