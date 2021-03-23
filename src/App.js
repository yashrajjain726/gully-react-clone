import MainPage from './pages/MainPlaySection'
// import MatchTicket from './pages/matchContainer'
import {BrowserRouter as Router,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <MainPage/>
    </div>
    </Router>
  );
}
<Route exact path="/"><MainPage/></Route>


export default App;
