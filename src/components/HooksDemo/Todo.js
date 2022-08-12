import React, { useRef, useReducer } from 'react'
import todoReducer from '../../reducers/todoReducer';

const Todo = () => {
  console.log('Program Started');
  // creating a ref for the input field -- to capture the form input value
  const todoInput = useRef('test');
  console.log(todoInput.current); // test
  // useReducer will get reducer as input and 
  // will return a array with state and dispatcher fn
  const [ todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);

    // hit the rest api 
    // save the data
    // get the response 
    
    todoDispatch({
      type: 'ADD_TODO',
      payload: todoInput.current.value //send the response data as payload 
    });

  }

  let todoList = null;
  if(todoState && todoState.length >0){
    todoList = todoState.map( (todo, index) => {
      return(
        <li className='list-group-item' key={index}>{todo}</li>
      )
    })
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
          { 
            todoState && todoState.length > 0? 
            todoList
            :
            <li className='alert alert-danger'>
              No Todos Found. You can add one!
            </li> 
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo