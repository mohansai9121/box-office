//import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShowById } from '../api/apiData'
import { useQuery } from '@tanstack/react-query'
import Cast from '../Shows/Cast'

const ShowDetail = () => {
  /*const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
    const {showid} = useParams()
    useEffect(()=>{
      async function fetchData(){
        try {
          const response = await getShowById(showid)
          setData(response)
        } catch (error) {
          setErr(error)
        }
      }
      fetchData()
    },[showid])*/
    const {showid} = useParams()
    const {data, error:err} = useQuery({
      queryKey:['Show',showid],
      queryFn:()=>getShowById(showid)
    })
    console.log(data)
    if(data){
      return <div><center>
        <h1>{data.name}</h1>
        <img src={data.image ? data.image.original: '/noPhoto.jpg'} alt={data.name}/>
        <div><pre><b>Genres:</b><div>{data.genres.map((item)=><div key={item}>{item}</div>)}</div></pre></div>
        <p><b>Status:</b>{data.status}</p>
        <p><b>Rating:</b>{data.rating.average?data.rating.average:'N/A'}</p>
        <p dangerouslySetInnerHTML={{__html:data.summary}}/>
        <div>
          <h3 style={{textAlign:'left', marginLeft:'100px'}}>Cast:</h3>
          <Cast persons={data._embedded.cast} seasons={data._embedded.seasons}/>
        </div>
        </center></div>
    }
    if(err){
      return <div><center>Error:{err.message}</center></div>
    }

  return (
    <div>
      <center>
        Data loading...
      </center>
    </div>
  )
}

export default ShowDetail
