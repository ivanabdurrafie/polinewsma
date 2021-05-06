import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
