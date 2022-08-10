// LifeCycle hooks are available to Class Comp. Not to fn comp

import React, { Component } from 'react'

class LifeCycleDemo extends Component {

  constructor(){
    super(); 
    console.log('********************** 1. Inside constructor **********************');
    // if you have constructor - ideal place for you to have state 
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    }

    this.myTimeout = null;
  }
  
  // lifecycle hooks
  componentDidMount(){
    // this method will be executed ONLY ONCE after the initial rendering
    // Called immediately after a component is mounted.
    // when the comp coming into view - componentDidMount will be called
    console.log('********************** 3. Inside componentDidMount **********************');
    // ideal place for you to make ajax calls
    // upon successful/failure ajax call -- you can UPDATE state here using this.setState()
    // mocking ajax calls
    this.myTimeout = setTimeout( () => {
      // assuming that we get successful resp after 4 sec from the rest api backend 
      // we need to update the state 
      this.setState({
        isLoading: false,
        // isError: true //  only if ajax resp is failure/error,
        featureName: 'LifeCycle Hooks Intro'
      });

      console.log(this.state);
    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when the state is updated, this method will be called immediately
    // it must return true or false 
    // compare prev state (this.state) adn new state (nextState)
    console.log(this.state);
    console.log(nextState);

    console.log('********************** 4. Inside shouldComponentUpdate  **********************');
    return true;
  }

  componentDidUpdate(){
    //called immedately after the UPDATE in JSX 
    // NOT called after INITIAL Rendering
    // use this an an opportunity to operate on DOM when component has been updated
    // Refer: https://reactjs.org/docs/react-component.html#componentdidupdate
    console.log('********************** 6. Inside componentDidUpdate **********************');
    document.getElementById('lastUpdatedInfo').innerHTML = 'Last Updated: ' + new Date();
  }

  componentWillUnmount() {
    console.log('********************** 7. Inside componentWillUnmount **********************');
    // when the comp goes out of the view
    clearTimeout(this.myTimeout);
  }

  render() {
    // NEVER EVER UPDATE STATE HERE
    console.log('********************** 2 / 5. Inside Render **********************');
    return (
      <>
        { this.state.isLoading? 
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          <div>
            <h3>{this.state.featureName}</h3>
            <a href='https://reactjs.org/docs/state-and-lifecycle.html'>Life Cycle Hooks Reference</a>
            <h6 id="lastUpdatedInfo"></h6>
          </div>
        }
        
      </>
    )
  }
}

export default LifeCycleDemo


