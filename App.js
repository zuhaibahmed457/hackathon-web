import './App.css';

import Login from './screens/login'
import Dashboard from './screens/dashboared';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Login />
          </Route>
          <Route exact path="/Dashboard">
              <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
