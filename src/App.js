import MainPage from './pages/MainPlaySection'
import MatchContainer from './pages/matchContainer'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/"component={MainPage}/>
      <Route exact path='/matchDetails'component={MatchContainer}/>
      </Switch>
   
    </Router>
  );
}



export default App;
