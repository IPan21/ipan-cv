import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './scenes/sceneHome/sceneHome';
import { AboutMe } from './scenes/sceneAboutMe/sceneAboutMe';
import { Contacts } from './scenes/sceneContacts/sceneContacts';
import Navbar from './modules/navbar/navbar';
import { GlobalStyles } from './common/globalStyles';
import { AppBase } from './common/appBase';

function App() {
  return (
    <AppBase>
        <GlobalStyles/>
        <Router>
          <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/" component={Home} />
          </Switch>
          <Navbar />
        </Router>
    </AppBase>
  );
}

export default App;