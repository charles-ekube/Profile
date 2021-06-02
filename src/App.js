import React from 'react';
import { NavTogglebutton} from './components';
import { Navbar } from './components/widgets';
import { Home } from './pages/App';




function App() {
  return (
    <>
      
      <div>
        <Navbar/>
        <NavTogglebutton/>
        <Home/>
      </div>
    </>
  );
}

export default App;
