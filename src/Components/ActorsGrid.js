import React from "react";
import ActorCard from "./ActorCard";

const ActorsGrid = ({ actors }) => {
  console.log(actors);
  return (
    <div>
      {actors.map((actor) => {
        return (
          <ActorCard
            key={actor.person.id}
            name={actor.person.name}
            image={actor.person.image}
            country={actor.person.country}
          />
        );
      })}
    </div>
  );
};

export default ActorsGrid;
