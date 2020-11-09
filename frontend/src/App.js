import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './pages/JobsPage/Jobs';

function App() {
  return (
    <Router> 
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Jobs}/>
          
        </Switch>
    </Router>
    
  );
}

export default App;
