import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import MainLayout from "./Pages/MainLayout";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Box - Office</h1>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
