import React from 'react'

const Program = ( props  ) => { // receiving data from parent comp

  console.log(props); 

  /*  
    * Props are objects 
    * Props are used for receiving data from parent comp 
    * Props can receive children
    * Props are read-only
  */

  return (
    <div className="card text-left mb-3">
      <div className="card-header">
        Featured TV Programs
        <span className="badge text-bg-warning float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.children}
        </p>
        <button type='button' className="btn btn-primary">
          Watch Now
        </button>
      </div>
      <div className="card-footer text-muted">{props.releasedOn}</div>
    </div>
  )
}

export default Program