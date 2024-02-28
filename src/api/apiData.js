const url = 'https://api.tvmaze.com'

const apiData = async (searchFor)=>{
    const response = await fetch(`${url}${searchFor}`)
    const body = response.json()
    return body
}

export const searchForShows = (query)=> apiData(`/search/shows?q=${query}`)
export const searchForPeople = (query) => apiData(`/search/people?q=${query}`)