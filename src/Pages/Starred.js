import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
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
    <div>
      <center>
        {starredShows ? (
          starredShows.map((showName, index) => {
            return (
              <div key={index}>
                <h3>ShowName:{showName}</h3>
                <MdDelete
                  style={{ color: "red" }}
                  onClick={() => deleteHandler(index)}
                />
              </div>
            );
          })
        ) : (
          <div>
            <h2>No Starred Shows</h2>
          </div>
        )}
      </center>
    </div>
  );
};

export default Starred;
