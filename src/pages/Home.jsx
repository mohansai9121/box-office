import React, { useState } from 'react'
//import { Link } from 'react-router-dom'

const Home = () => {
  const [searchStr, setSearchStr] = useState('')
  const searchHandler = (e) =>{
    console.log(e.target.value)
    setSearchStr(e.target.value)
  }
  const search=async (e)=>{
    e.preventDefault()
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    const body = response.json()
    console.log(body)
  }
  return (
    <div>
      <center><h2>Home page</h2><br></br>
      <form onSubmit={search}>
        <label>Name:</label>
        <input value={searchStr} type='text' onChange={searchHandler}/><br></br>
        <button onClick={search}>Click here</button>
      </form>
      </center>
    </div>
  )
}

export default Home
