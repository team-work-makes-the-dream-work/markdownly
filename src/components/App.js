import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/markdowns/:id' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
