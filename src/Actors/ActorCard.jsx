import React from 'react'

const ActorCard = ({image, name, birthday, deathday, gender, country}) => {
  return (
    <div style={{border:'1px solid black', margin:'5px 150px 5px 150px'}}>
      <div><img src={image} alt={name} height={325} width={250} title={name}/></div>
      <h3>{name}</h3>
      <p>Birthday:{birthday}</p><p>Gender:{gender}</p>
      <h5>country:{country}</h5>
      <p>{deathday ? deathday:' Still Alive'}</p>
    </div>
  )
}

export default ActorCard
