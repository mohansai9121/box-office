import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {text:"Home page", to:'/'},
    {text:"Starred page", to:'/starred'}
]

const Navigation = () => {
  return (
    <div>
      <center>{links.map((item,idx)=>{
        return <li key={idx}><Link to={item.to}>{item.text}</Link></li>
      })}</center>
    </div>
  )
}

export default Navigation
