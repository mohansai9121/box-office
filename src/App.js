import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import MainLayout from "./Pages/MainLayout";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <center>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="/show/:id" element={<Show />} />
          </Routes>
        </HashRouter>
      </center>
    </div>
  );
}

export default App;
