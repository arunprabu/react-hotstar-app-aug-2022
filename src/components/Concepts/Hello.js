import React from 'react'

const Hello = (props) => {
  console.log(props);
  return (
    <div>Hello {props.name}</div>
  )
}

export default Hello

