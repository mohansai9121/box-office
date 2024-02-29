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
        birthday={data.person.birthday ? data.person.birthday:' Don\'t know' }
        deathday={data.person.deathday}
        gender={data.person.gender ? data.person.gender:' did\'t mention'}
        country={data.person.country ? data.person.country.name : ' No Country mentioned'}
        />
      })}
    </div>
  )
}

export default Actors
