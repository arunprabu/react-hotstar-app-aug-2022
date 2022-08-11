import React, { useRef } from 'react'

const Todo = () => {

  // creating a ref for the input field -- to capture the form input value
  const todoInput = useRef('');

  const handleAddTodo = () => {
    console.log(todoInput.current.value);

    // hit the rest api 
    // save the data
    // get the response 
    
    // update the UI 
  }

  return (
    <div className='row'>
      <h3>Todo | useRef() and useReducer() Demo</h3>

      <div className='col-md-6 offset-md-3'>
        <div className="col-auto">
          <input type='text' className='form-control'
          placeholder='Enter Todo' ref={todoInput}/>
        </div>
        <div className="col-auto">
          <button className='btn btn-primary btn-sm' 
          onClick={handleAddTodo}>ADD TODO</button>
        </div>
        
        <ul className='list-group'>
          <li className='list-group-item'>Todo number 1</li>
          <li className='list-group-item'>Todo number 2</li>
          <li className='alert alert-danger'>
            No Todos Found. You can add one!
          </li> 
        </ul>
      </div>
    </div>
  )
}

export default Todo