const base_url = "https://api.tvmaze.com";

const searching = async (searchurl) => {
  let response = await fetch(`${base_url}${searchurl}`);
  let body = response.json();
  return body;
};

export const searchForShows = (searchString) =>
  searching(`/search/shows?q=${searchString}`);
export const searchForActors = (searchString) =>
  searching(`/search/people?q=${searchString}`);
