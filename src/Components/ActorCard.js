import React from "react";
import noPhoto from "./noPhoto.jpg";
import "./components.css";

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
      {country ? (
        <p>
          <span style={{ fontSize: "larger", textDecoration: "underline" }}>
            Country
          </span>
          :{country.name}
        </p>
      ) : (
        ""
      )}
      {birthday ? (
        <p>
          <span style={{ fontSize: "larger", textDecoration: "underline" }}>
            Birthday
          </span>
          :{birthday}
        </p>
      ) : (
        ""
      )}
      {deathday ? (
        <p>
          <span style={{ fontSize: "larger", textDecoration: "underline" }}>
            Deathday
          </span>
          :{deathday}
        </p>
      ) : (
        ""
      )}
      {birthday && !deathday ? <p style={{ color: "#7EFE0C" }}>Alive</p> : ""}
    </div>
  );
};

export default ActorCard;
