import React from 'react'
import './components.css';


const Navbar =() => {

  const [menu, setMenu] = React.useState(false);
  let list
  if(menu) {
    list = <div className='mobile-nav'>
      <ul>
        <li>rrjn</li>
        <li>rf</li>
        <li>frfrf</li>
        <li>rff</li>
      </ul>
    </div>
  }
  
  
  
  return (
    <>
      <header>
        <nav className='navbar'>
            <ul className='nav-list'>
              <li className='nav-item'>Charles</li>
              <li className='nav-item' id='available'>
                <small>Available</small>
                <span></span>
                </li>
              <li 
              className='nav-item' 
              onClick={() => setMenu(!menu)}
              >=</li>
            </ul>
        </nav>
        {list} 
      </header>      
    </>
  )
}

export  {Navbar}
