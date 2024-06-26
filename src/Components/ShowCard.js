import React, { useEffect, useState } from "react";
import noPhoto from "./noPhoto.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./components.css";

const ShowCard = ({ name, language, genres, image, summary, id }) => {
  const [starredShow, setStarredShow] = useState("");
  const [starred, setStarred] = useState(false);
  //const [starredShows, setStarredShows] = useState([]);

  const starHandler = () => {
    setStarredShow(id);
    setStarred(true);
  };

  console.log(starredShow);

  useEffect(() => {
    let shows = JSON.parse(localStorage.getItem("showId"));
    if (shows) {
      shows.push(starredShow);
    }
    if (starredShow === "") {
      shows = [];
    }
    localStorage.setItem("showId", JSON.stringify(shows));
  }, [starredShow]);

  const detail = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g)
    : "No summary details...";
  return (
    <div>
      <img
        src={image ? image.medium : noPhoto}
        alt={name}
        height={220}
        width={170}
      />
      <h2>{name}</h2>
      <p>Language:{language}</p>
      <p>Genres:{genres}</p>
      <p>Details:{detail}</p>
      <div>
        <Link to={`/show/${id}`}>Know more</Link>
        <FaStar onClick={starHandler} className={starred ? "gold" : ""} />
      </div>
    </div>
  );
};

export default ShowCard;
