import React from "react";
import ShowCard from "./ShowCard";

const ShowsGrid = ({ shows }) => {
  console.log(shows);
  return (
    <div>
      {shows.map((data) => {
        return (
          <div key={data.show.id}>
            <ShowCard
              key={data.show.id}
              name={data.show.name}
              language={data.show.language}
              genres={data.show.genres}
              image={data.show.image}
              summary={data.show.summary}
              id={data.show.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShowsGrid;
