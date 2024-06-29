import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./pages.css";

const MainLayout = () => {
  return (
    <div>
      <center>
        <div className="background">
          <h1 style={{ fontSize: "52px", fontWeight: "800" }}>
            The Box Office
          </h1>
          <h2>Search for movies and actors...</h2>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/starred" target="_blank" className="link">
                Starred
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </center>
    </div>
  );
};

export default MainLayout;
