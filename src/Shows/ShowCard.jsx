import React from 'react'

const ShowCard = ({image, name}) => {
  return (
    <div>
      <img src={image} alt={name} title={name} height={325} width={200}/>
      <h3>{name}</h3>
    </div>
  )
}

export default ShowCard
