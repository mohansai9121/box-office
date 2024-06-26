import React from "react";
import noPhoto from "./noPhoto.jpg";

const ShowCard = ({ name, language, genres, image, summary }) => {
  summary = summary.split(" ").slice(2, 10).join(" ");
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
      <p>summary</p>
    </div>
  );
};

export default ShowCard;
