import React from 'react'
import ShowCard from './ShowCard'

const Shows = ({shows}) => {
  return (
    <div>
        {shows.map((data)=>{
            return <ShowCard key={data.show.id} 
            image={data.show.image ? data.show.image.medium:'./noPhoto.jpg'}
            name={data.show.name}/>
        })}
    </div>
  )
}

export default Shows
