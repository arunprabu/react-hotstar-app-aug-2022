import React from 'react'
import Blog from './Blog'
import MyAccount from './MyAccount'

const HooksDemo = () => {
  return (
    <div>
      <h1>Explore React Hooks!</h1>
      
      <h2>useState Hook | Demo</h2>
      <MyAccount/>

      <hr />
      <h2>useEfect Hook | Demo</h2>
      <Blog/>
    </div>
  )
}

export default HooksDemo