import React from 'react'
import ActorCard from './ActorCard'

const Actors = ({actors}) => {
  return (
    <div>
      {actors.map((data)=>{
        return <ActorCard 
        key={data.person.id} 
        image={data.person.image ? data.person.image.medium : 'noPhoto.jpg'} 
        name={data.person.name} 
        birthday={data.person.birthday}
        />
      })}
    </div>
  )
}

export default Actors
