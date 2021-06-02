import './App.css';
import { Route, Switch, Redirect, BrowserRouter} from "react-router-dom"
import Events from './events/Events';
import Header from './components/header/Header';
import Judge from './judges/Judge';
import Admin from './admin/mainPage/Admin';
import Judges from './judges/Judges';
import Player from './player/Player';
import Viewer from './viewers/Viewer';
import ListOfViewers from './viewers/ListOfViewers';
import MainPage from './mainPage/MainPage';
import Registration from './registration/Registration';
import Login from './login/Login';
import ListOfPlayers from './player/listOfPlayers'
import AdminListOfPlayers from './admin/player/adminListOfPlayers';
import ListOfTeams from './teams/ListOfTeams';
import Team from './teams/Team';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
        <Header/>
       <BrowserRouter>
      <Switch>
        <Route path="/mainPage" component={MainPage}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/listOfViewers" component={ListOfViewers}></Route>
        <Route path="/viewer" component={Viewer}></Route>
        <Route path="/listOfEvents" component={Events}></Route>
        <Route path="/event" component={Event}></Route>
        <Route path="/listOfJudges" component={Judges}></Route>
        <Route path="/judge" component={Judge}></Route>
        <Route path="/listOfPlayers" component={ListOfPlayers}></Route>
        <Route path="/player" component={Player}></Route>
        <Route path="/listOfTeams" component={ListOfTeams}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/admin/listOfPlayers" component={AdminListOfPlayers}></Route>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
