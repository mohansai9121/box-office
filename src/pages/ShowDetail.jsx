//import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShowById } from '../api/apiData'
import { useQuery } from '@tanstack/react-query'

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
    if(data){
      return <div><center>Showing the details of SHow:{data.name}</center></div>
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
