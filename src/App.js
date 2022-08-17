import Sidebar  from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PersonaList from "./pages/personaList/PersonaList";

function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="container">
        <Sidebar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/personas">
              <PersonaList/>
            </Route>            
          </Switch>
      </div>    
    </Router>
  );
}

export default App;
