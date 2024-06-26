import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <center>
        <h1>The Box Office App</h1>
        <h3>Search for movies and actors...</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/starred">Starred</Link>
          </li>
        </ul>
        <Outlet />
      </center>
    </div>
  );
};

export default MainLayout;