
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from './pages/list-page';
import CharacterDetailPage from './pages/character-detail-page';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ListPage}></Route>
        <Route path="/character/:characterId" component={CharacterDetailPage} />
      </Router>
    </div>
  );
}

export default App;
