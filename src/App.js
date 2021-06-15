import React from 'react';
import { Navbar } from './components/widgets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact, Home, Projects, Skills, Playground } from './pages';



function App() {
  
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
          <Route path='/playground' component={Playground} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
