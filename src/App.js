import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import Location from './pages/Location';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/location" component={Location} />
        <Route path="/character/:id" component={Character} />
      </Router>
    </div>
  );
}

export default App;
