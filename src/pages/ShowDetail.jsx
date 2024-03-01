import React from 'react'
import { useParams } from 'react-router-dom'

const ShowDetail = () => {
    const {showid} = useParams()
  return (
    <div>
      <center>
        Show Details page of Show id:{showid}
      </center>
    </div>
  )
}

export default ShowDetail
