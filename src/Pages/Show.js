import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import nophoto from "../Components/noPhoto.jpg";
import { MutatingDots } from "react-loader-spinner";
import "./pages.css";
import "../Components/components.css";

const Show = () => {
  const [data, setData] = useState("");
  const [dataError, setDataError] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  let summary = data
    ? data.summary.split(" ").slice(0, data.length).join(" ").replace(/<.+?>/g)
    : "No Summary...";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        /*const response = searchShowByID(31177);
        setData(response);*/
        await fetch(
          `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
        )
          .then((response) => response.json())
          .then((res) => {
            setData(res);
            setLoading(false);
          })
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
      <Link to="/" className="link">
        <button className="search">Home</button>
      </Link>
      <br />
      {loading ? (
        <MutatingDots
          visible={true}
          height="120"
          width="120"
          color="white"
          secondaryColor="white"
          radius="15"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{ margin: 150 }}
          wrapperClass=""
        />
      ) : (
        <div>
          {" "}
          <center>
            <img
              src={data.image ? data.image.original : nophoto}
              alt={data.name}
              height={700}
              width={430}
              style={{ overflow: "scroll" }}
            />
            <h1 style={{ fontSize: "60px" }}>{data.name}</h1>
            {data.language ? (
              <h3>
                Language:
                <span style={{ fontWeight: "900" }}>{data.language}</span>
              </h3>
            ) : (
              ""
            )}
            {data.genres ? (
              <h3>
                Genres:
                <span style={{ fontWeight: "900" }}>
                  {data.genres.join(", ")}
                </span>
              </h3>
            ) : (
              ""
            )}
            <p>{summary}</p>
            {data.status ? (
              <h3>
                Status:
                <span style={{ fontWeight: "900" }}>{" " + data.status}</span>
              </h3>
            ) : (
              ""
            )}
          </center>
        </div>
      )}
    </div>
  );
};

export default Show;
