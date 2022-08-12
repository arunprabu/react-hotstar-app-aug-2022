/* 
  reducer 
  --  
    * is a fn -- will take in two params (state, action)
    * must return state
    * action is an obj. will have two properties- type and payload/data
*/


const todoReducer = ( state = [], action) => {
  debugger;
  console.log('Inside todoReducer');

  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.payload];
    
    default:
      return state;
  }
  
}

export default todoReducer;