import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import nophoto from "../Components/noPhoto.jpg";

const Show = () => {
  const [data, setData] = useState("");
  const [dataError, setDataError] = useState("");
  const { id } = useParams();
  let summary = data
    ? data.summary.split(" ").slice(0, data.length).join(" ").replace(/<.+?>/g)
    : "No Summary...";

  useEffect(() => {
    async function fetchData() {
      try {
        /*const response = searchShowByID(31177);
        setData(response);*/
        await fetch(
          `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
        )
          .then((response) => response.json())
          .then((res) => setData(res))
          .catch((err) => setDataError(err.message));
      } catch (err) {
        setDataError(err.message);
      }
    }
    fetchData();
  }, [id]);

  console.log(data);
  console.log(id);
  console.log(dataError);

  return (
    <div>
      <Link to="/">Home</Link>
      <center>
        <img src={data.image ? data.image.medium : nophoto} alt={data.name} />
        <h1>{data.name}</h1>
        <h3>Language:{data.language}</h3>
        <p>Genres:{data.genres ? data.genres : "--"}</p>
        <p>{summary}</p>
      </center>
    </div>
  );
};

export default Show;
