import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./pages.css";
import "../Components/components.css";
//import ShowCard from "../Components/ShowCard";

const Starred = () => {
  const [starredShows, setStarredShows] = useState([]);
  //const [data, setData] = useState("");

  /*const getShow = async (id) => {
    await fetch(
      `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };*/

  const deleteHandler = (n) => {
    let shows = [...starredShows];
    shows.splice(n, 1);
    setStarredShows(shows);
    console.log(shows);
    localStorage.setItem("showId", JSON.stringify(shows));
  };

  useEffect(() => {
    let shows = JSON.parse(localStorage.getItem("showId"));
    if (shows) {
      let shows1 = [];
      for (let i = 0; i < shows.length; i++) {
        if (shows[i] === "" || shows1.includes(shows[i] || shows[i] === "1")) {
          continue;
        } else {
          let show = shows[i];
          shows1.push(show);
        }
      }
      setStarredShows(shows1);
      localStorage.setItem("showId", JSON.stringify(shows1));
    }
  }, []);

  console.log(starredShows);

  return (
    <div className="data">
      <center>
        <h2>Starred shows are:</h2>
        {starredShows.length > 0 ? (
          <div className="grid">
            {starredShows.map((showName, index) => {
              return (
                <div key={index} className="showCard">
                  <h3>{showName}</h3>
                  <MdDelete
                    style={{ color: "red" }}
                    onClick={() => deleteHandler(index)}
                    className="delete"
                    title="Delete.."
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h3 style={{ color: "#F03F31" }}>No Starred Shows</h3>
          </div>
        )}
      </center>
    </div>
  );
};

export default Starred;
