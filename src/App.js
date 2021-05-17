import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path={'/'}>
            <Login/>
          </Route>
          <Route path={'/home'}>
            <Home/>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
