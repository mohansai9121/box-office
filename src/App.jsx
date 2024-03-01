import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Layout from "./components/Layout";
import ShowDetail from "./pages/ShowDetail";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/starred" element={<Starred/>}/>
          </Route>
          <Route path="/show/:showid" element={<ShowDetail/>}/>
          <Route path="*" element={<div><center>Page not found</center></div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
