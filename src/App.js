// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Sport from './Components/Sport';
import News from './Components/News'
import Techno from './Components/Techno'
import Travel from './Components/Travel'
import SinglePage from './Components/SinglePage'
import NotFound from './Components/NotFound'
import Dashboard from './admin/dashboard';
import Tambah from './admin/tambah';
import Edit from "./admin/edit";
import Login from "./admin/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/news" component={News} />
          <Route exact path="/techno" component={Techno} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path='/news/:id' component={SinglePage} />
          {/* admin */}
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/tambahberita' component={Tambah} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/:id' component={Edit} />
          <Route exact path="*" component={NotFound} />
          {/* <Route path="*" components= {NotFound}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
