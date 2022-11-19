import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css";
import PersonaList from "./pages/personaList/PersonaList";
import Malla from "./pages/mallaCurricular/Malla";
import Curriculum from "./components/Subject/Curriculum";
import { Person } from "./pages/personaList/Person";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <ToastContainer />
      <Topbar />
      <div className="w-full flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mallaCurricular" element={<Malla />} />
          <Route exact path="/person" element={<Person />} />
          <Route exact path="/personCreate" element={<PersonaList />} />
          <Route
            exact
            path="/curriculum/:id"
            element={<Curriculum role="student" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
