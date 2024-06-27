import React from "react";
import noPhoto from "./noPhoto.jpg";

const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <div className="showCard">
      <img
        src={image ? image.medium : noPhoto}
        alt={name}
        width={150}
        height={200}
      />
      <h2>
        {name} {gender && <span style={{ fontSize: "15px" }}>({gender})</span>}{" "}
      </h2>
      {country ? <p>Country:{country.name}</p> : ""}
      {birthday ? <p>Birthday:{birthday}</p> : ""}
      {deathday ? <p>Deathday:{deathday}</p> : ""}
      {birthday && !deathday ? <p>Alive</p> : ""}
    </div>
  );
};

export default ActorCard;
