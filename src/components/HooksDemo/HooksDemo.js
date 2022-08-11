import React from 'react'
import Blog from './Blog'
import MyAccount from './MyAccount'
import Todo from './Todo'

const HooksDemo = () => {
  return (
    <div>
      <h1>Explore React Hooks!</h1>
      
      <h2>useState Hook | Demo</h2>
      <MyAccount/>

      <hr />
      <h2>useEffect Hook | Demo</h2>
      <Blog/>

      <hr/>
      <h2>useRef and useReducer Hooks | Demo</h2>
      <Todo />
    </div>
  )
}

export default HooksDemo