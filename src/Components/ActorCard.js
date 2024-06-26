import React from "react";
import noPhoto from "./noPhoto.jpg";

const ActorCard = ({ name, image, country }) => {
  return (
    <div>
      <img
        src={image ? image.medium : noPhoto}
        alt={name}
        width={150}
        height={200}
      />
      <h2>{name}</h2>
      <p>Country:{country ? country.name : "---"}</p>
    </div>
  );
};

export default ActorCard;
