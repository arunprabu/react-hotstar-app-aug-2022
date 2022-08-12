import React, { Component } from 'react'

export class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  //to catch error
  static getDerivedStateFromError(error){
    console.log(error);
    return {
      hasError: true
    }
  }

  // if any errors occur in child comp tree, the following will be executed
  componentDidCatch(error, errorInfo){
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    console.log(this.props);
    if(this.state.hasError){
      return (
        <div className='alert alert-danger'>
          <p>Some error occured!</p>
          <p>Try again later.</p>
        </div>
      )
    }else{
      return this.props.children;
    }
    
  }
}

export default ErrorBoundary