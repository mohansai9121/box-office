import React from "react";
import ActorCard from "./ActorCard";
import "./components.css";

const ActorsGrid = ({ actors }) => {
  console.log(actors);
  return (
    <div className="grid">
      {actors.map((actor) => {
        return (
          <ActorCard
            key={actor.person.id}
            name={actor.person.name}
            image={actor.person.image}
            country={actor.person.country}
            birthday={actor.person.birthday}
            deathday={actor.person.deathday}
            gender={actor.person.gender}
          />
        );
      })}
    </div>
  );
};

export default ActorsGrid;
