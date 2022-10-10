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
import Malla from "./pages/mallaCurricular/Malla";
import Curriculum from "./components/Subject/Curriculum";
import { Person } from "./pages/personaList/Person";

function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="w-full flex">
        <Sidebar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/mallaCurricular">
              <Malla/>
            </Route>
            <Route exact path="/person">
              <Person/>
            </Route>
            <Route exact path="/personCreate">
              <PersonaList/>
            </Route>
            <Route exact path="/curriculum/:id">
              <Curriculum role='Admin'/>
            </Route>           
          </Switch>
      </div>    
    </Router>
  );
}

export default App;
