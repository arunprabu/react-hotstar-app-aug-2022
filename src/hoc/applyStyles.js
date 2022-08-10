// HOC 
// to share common component logic

// should take in one comp as input and return one comp as output 
// applyStyles in a fn -- Not a comp 

const applyStyles = (OriginalComponent) => { // OriginalComponent is input comp 
  
  // Let's return a new comp 
  const NewComp = (props) => {
    console.log(props);
    return(
      <div className="hocStyle text-center">
        <OriginalComponent {...props}/>
      </div>
    )
  }

  return NewComp;
} 

export default applyStyles;