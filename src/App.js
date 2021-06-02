import React from 'react';
import { NavTogglebutton, ThemeToggle } from './components';
// import { NavTogglebutton } from './components/buttons/togglebutton/navToggle';
// import { NavTogglebutton } from './components/buttons/togglebutton/navToggle';
// import { Togglebutton } from './components/buttons';
// import { Togglebutton } from './components/buttons/togglebutton';
import { Navbar } from './components/widgets';
import { Home } from './pages/App';




function App() {
  return (
    <>
      
      <div>
        <Navbar/>
        
        <NavTogglebutton/>
        <Home/>
        {/* <Home/> */}
      </div>
    </>
  );
}

export default App;
