import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Details from './pages/Details';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import './index.css';
import Search from './pages/Search';
import WatchList from './pages/WatchList';
import Soon from './pages/Soon';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route  path="/home" component={Home} />
            <Route  path="/details/:id" component={Details} />
            <Route  path="/search" component={Search} />
            <Route  path="/watchList" component={WatchList} />
            <Route  path="/soon" component={Soon} />
          </Switch>  
      </Router>
    </div>
  );
}

export default App;
