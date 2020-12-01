import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './pages/JobsPage/Jobs';
import Analytic from './pages/AnalyticPage/Analytic';
import People from './pages/PeoplePage/People';

function App() {
  return (
    <Router> 
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Jobs}/>
          <Route path='/analytic' exact component={Analytic}/>
          <Route path='/people' exact component={People}/>
      </Switch>
    </Router>
  );
}

export default App;
