import './App.css';
import { Route, Switch, Redirect, BrowserRouter} from "react-router-dom"
import Events from './events/Events';
import Header from './components/header/Header';
import Judge from './judges/Judge';
import Admin from './admin/mainPage/Admin';
import Judges from './judges/Judges';
import Player from './player/Player';
import Viewer from './viewers/Viewer';
import MainPage from './mainPage/MainPage';
import ListOfViewers from './viewers/ListOfViewers'; 
import Registration from './registration/Registration';
import Login from './login/Login';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
        <Header/>
       <BrowserRouter>
      <Switch>
        <Route path="/mainPage" component={MainPage}></Route>
        <Route path="/listOfViewers" component={ListOfViewers}></Route>
        <Route path="/listOfEvents" component={Events}></Route>
        <Route path="/event" component={Event}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/judge" component={Judge}></Route>
        <Route path="/listOfJudges" component={Judges}></Route>
        <Route path="/player" component={Player}></Route>
        <Route path="/viewer" component={Viewer}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
