import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './pages/JobsPage/Jobs';
import Analytic from './pages/DetailPage/Analytic';

function App() {
  return (
    <Router> 
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Jobs}/>
          <Route path='/analytic' exact component={Analytic}/>
          
        </Switch>
    </Router>
    
  );
}

export default App;
