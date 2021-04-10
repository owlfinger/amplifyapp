import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Bill was here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/tic">tic</Link>
          </li>
          
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          
          <Route path="/tic">
            <tic />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
        
      </header>
    </div>

  );
}

function tic() {
  return (
    <div>
      <h2>tic</h2>
    </div>
  );
}


export default App;
