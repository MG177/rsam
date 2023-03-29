import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import ItemList from './components/items/ItemList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ItemList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
