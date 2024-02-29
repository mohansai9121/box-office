import React from 'react'

const ShowCard = ({image, name, summary}) => {
  const details = summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):'NO description'
  return (
    <div>
      <br></br>
      <img src={image} alt={name} title={name} height={325} width={200}/>
      <h3>{name}</h3>
      <p>{details}</p><br></br>
    </div>
  )
}

export default ShowCard
