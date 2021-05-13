import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/style.scss'
import Home from './view/Home';

function App() {

  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
