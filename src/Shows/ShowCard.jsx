import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({id, image, name, summary}) => {
  //console.log(id)
  const details = summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):'NO description'
  return (
    <div style={{border:'1px solid black', margin:'5px 150px 5px 150px'}}>
      <br></br>
      <img src={image} alt={name} title={name} height={325} width={200}/>
      <h3>{name}</h3>
      <p>{details}</p>
      <Link to={`/show/${id}`}>Know more</Link><br></br>
    </div>
  )
}

export default ShowCard
