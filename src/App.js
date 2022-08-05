import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Movies from './pages/Movies';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path="/movies">
            <Movies/>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
