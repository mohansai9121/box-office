import React, { useState } from 'react'
import { searchForShows, searchForPeople } from '../api/apiData'
//import { Link } from 'react-router-dom'

const Home = () => {
  const [searchStr, setSearchStr] = useState('')
  const [apiData, setApiData] = useState(null)
  const [apiError, setApiError] = useState(null)
  const [searchOption, setSearchOption] = useState('shows')
  console.log(searchOption)
  const searchHandler = (e) =>{
    setSearchStr(e.target.value)
  }
  const search=async (e)=>{
    try{
      e.preventDefault()
      if(searchOption==='shows'){
        const body = await searchForShows(searchStr)
        setApiData(body)
      }else{
        const body = await searchForPeople(searchStr)
        setApiData(body)
      }
    }catch(err){
      setApiError(err)
    }
  }
  const renderApiData = ()=>{
    if(apiError){
      return <div>Error in fetching</div>
    }
    if(apiData){
      return apiData[0].show?
      apiData.map((data)=>(
        <div key={data.show.id}>{data.show.name}</div>
      )):apiData.map((data)=>(
        <div key={data.person.id}>{data.person.name}</div>
      ))
    }
    return null
  }
  return (
    <div>
      <center><h2>Home page</h2><br></br>
      <form onSubmit={search}>
        <label>Search for:
          <input value={searchStr} type='text' onChange={searchHandler}/>
        </label><br></br>
        <label>Actors
          <input type='radio' name={searchOption} value='actors' onChange={(e)=>setSearchOption(e.target.value)}/>
        </label>
        <label>Shows
          <input type='radio' name={searchOption} value='shows' onChange={(e)=>setSearchOption(e.target.value)}/>
        </label>
        <button onClick={search}>Search</button>
      </form>
      <div>
        {renderApiData()}
      </div>
      </center>
    </div>
  )
}

export default Home
