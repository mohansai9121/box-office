import React from 'react'

const Title = (props) => {
    let {title="Mohan", subtitle="This is a box office"} = props
  return (
    <div>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  )
}

export default Title
