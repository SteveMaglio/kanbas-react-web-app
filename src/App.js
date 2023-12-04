import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Project from "./project";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="project" />} />
            <Route path="/project/*" element={<Project />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
