import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Sport from './Components/Sport';
import News from './Components/News'
import NotFound from './Components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/news" component={News} />
          <Route exact path="*" component={NotFound} />
          {/* <Route path="*" components= {NotFound}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
