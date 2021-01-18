import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import Location from './pages/Location';
import Character from './pages/Character';
import SpecificLocation from './pages/SpecificLocation';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/location" component={Location} />
        <Route path="/character/:id" component={Character} />
        <Route path="/location/:id" component={SpecificLocation} />
      </Router>
    </div>
  );
}

export default App;
