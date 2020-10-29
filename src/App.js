import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPerson from './components/FirstPerson';
import SecondPerson from './components/SecondPerson';
import PersonSwitcher from './components/PersonSwitcher';

import './styles.css';

function App() {
  return (
    <div className="App">
      <PersonSwitcher />
      <Switch>
        <Route path="/" component={ FirstPerson } exact />
        <Route path="/first-person" component={ FirstPerson } exact />
        <Route path="/second-person" component={ SecondPerson } exact />
      </Switch> 
    </div>
  );
}

export default App;
