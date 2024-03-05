import React from 'react'

const Cast = ({persons, seasons}) => {
  return (
    <div>
      <center>
        <div>
            <p><b>Seasons:</b>{seasons.length}</p>
            <p><b>Duration Period:</b>{seasons.premiereDate?seasons.premiereDate:'N/A'} - {seasons.endDate?seasons.endDate:'N/A'}</p>
            <p>{seasons.map((season, index)=>{
                return(
                    <div key={index}>{index+1}.<p dangerouslySetInnerHTML={{__html:season.summay?season.summay:'No Summary'}}/> </div>
                )
            })}</p>
        </div>
        <h4>Cast:</h4>
        {persons.map((person)=>{
            return(
                <div key={person.person.id} style={{border:'1px solid black', margin:'5px 20px 5px 20px', padding:'5'}} >
                    <img src={person.person.image?person.person.image.medium:'/noPhoto.jpg'} height={200} width={150} alt={person.person.name}/>
                    <h3>{person.person.name}</h3>
                    <p><b>Gender:</b>{person.person.gender?person.person.gender:'N/A'}</p>
                    <div>
                        <img src={person.character.image?person.character.image.medium:'/noPhoto.jpg'} height={60} width={45} alt={person.character.name}/>
                        <p>Character:{person.character.name}</p>
                    </div>
                </div>
            )
        })}
      </center>
    </div>
  )
}

export default Cast
