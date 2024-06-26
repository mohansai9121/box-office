import React, { useEffect, useState } from "react";
//import ShowCard from "../Components/ShowCard";

const Starred = () => {
  const [starredShows, setStarredShows] = useState([]);
  //const [data, setData] = useState("");

  /*const getShow = async (id) => {
    await fetch(
      `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
    )
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  };*/

  useEffect(() => {
    let shows = JSON.parse(localStorage.getItem("showId"));
    if (shows) {
      setStarredShows(shows);
    }
  }, []);

  return (
    <div>
      <center>
        {starredShows.map((showId, index) => {
          return (
            <div key={index}>
              <h1>ShowID:{showId}</h1>
            </div>
          );
        })}
      </center>
    </div>
  );
};

export default Starred;
