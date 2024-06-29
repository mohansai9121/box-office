import React, { useState } from "react";
import { searchForActors, searchForShows } from "../Components/fatchData";
import ShowsGrid from "../Components/ShowsGrid";
import ActorsGrid from "../Components/ActorsGrid";
import { MutatingDots } from "react-loader-spinner";
import "./pages.css";

const Home = () => {
  const [searchString, setSearchString] = useState("");
  const [searchFor, setSearchFor] = useState("shows");
  const [apiData, setApiData] = useState([]);
  const [searched, setSearched] = useState(false);
  const [apiDataError, setApiDataError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSearched(true);
    setLoading(true);
    try {
      if (searchFor === "shows") {
        let data = await searchForShows(searchString);
        setApiData(data);
        setLoading(false);
      } else {
        let data = await searchForActors(searchString);
        setApiData(data);
        setLoading(false);
      }
    } catch (error) {
      setApiDataError(error.message);
    }
  };

  const renderData = () => {
    if (loading) {
      return (
        <MutatingDots
          visible={true}
          height="120"
          width="120"
          color="white"
          secondaryColor="white"
          radius="15"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{ margin: 150 }}
          wrapperClass="loading"
        />
      );
    }
    if (apiDataError) {
      return (
        <div>
          <h2>{apiDataError}</h2>
        </div>
      );
    }
    if (!searched) {
      return <div></div>;
    }
    if (apiData.length === 0) {
      return (
        <div style={{ fontSize: "30px", fontWeight: "800" }}>No data Found</div>
      );
    }
    if (apiData[0].show) {
      return <ShowsGrid shows={apiData} />;
    }
    if (apiData[0].person) {
      return <ActorsGrid actors={apiData} />;
    }
  };

  return (
    <div>
      <center>
        <div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="input"
              value={searchString}
              placeholder="Search here..."
              onChange={(e) => setSearchString(e.target.value)}
            />
            <br />
            <label className="radio">
              actors
              <input
                type="radio"
                value="actors"
                onChange={(e) => setSearchFor(e.target.value)}
                checked={searchFor === "actors"}
              />
            </label>
            <label className="radio">
              shows
              <input
                type="radio"
                value="shows"
                onChange={(e) => setSearchFor(e.target.value)}
                checked={searchFor === "shows"}
              />
            </label>
            <br />
            <button type="submit" className="search">
              Search
            </button>
          </form>
        </div>
        <div className="data">{renderData()}</div>
      </center>
    </div>
  );
};

export default Home;
