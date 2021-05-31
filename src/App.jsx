import './App.css';
import { Route, Switch, Redirect, BrowserRouter} from "react-router-dom"
import Events from './events/Events';
import Header from './navbar/Header';
import Judge from './judges/Judge';
import Admin from './admin/Admin'
import Judges from './judges/Judges';
import Player from './player/Player';
import Viewer from './viewers/Viewer';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
        <Header/>
       <BrowserRouter>
      <Switch>
        <Route path="/events" component={Events}></Route>
        <Route path="/event" component={Event}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/judge" component={Judge}></Route>
        <Route path="/judges" component={Judges}></Route>
        <Route path="/player" component={Player}></Route>
        <Route path="/viewer" component={Viewer}></Route>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
