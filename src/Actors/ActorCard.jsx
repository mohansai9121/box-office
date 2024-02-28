import React from 'react'

const ActorCard = ({image, name, birthday}) => {
  return (
    <div>
      <div><img src={image} alt={name} height={325} width={250} title={name}/></div>
      <h3>{name}</h3>
      <p>Birthday:{birthday}</p>
    </div>
  )
}

export default ActorCard
