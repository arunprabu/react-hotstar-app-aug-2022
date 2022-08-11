import React, { useEffect, useState } from 'react'

const Blog = () => {
  console.log('1. Program Started');
  const [ topicName, setTopicName ] = useState('React Hooks Demo');
  const [ publishedDate, setPublishedDate ] = useState(new Date());
  
  console.log('2. Before useEffect');
  useEffect(() => {
    console.log('4. Inside useEffect');
    // first param is effect
    // runs after every completed render, upon initial rendering and upon update as well 
    // it is an alternative to componentDidMount and componentDidUpdate
    // ideal place for ajax calls 
    document.title = topicName;
  }, [ topicName ]); // second arg is dependency
  // it has to be an array -- and it's optional

  const handleChangeTopicName = () => {
    console.log('handleChangeTopicName');
    setTopicName('useEffect Demo');
  }

  const handleUpdateDate = () => {
    setPublishedDate(new Date());
  }

  console.log('3. Before Return');
  return (
    <>
      <p>Topic Name: {topicName} </p>

      <button onClick={handleChangeTopicName}>Change Topic</button>

      <p>Date: {publishedDate.toISOString()}</p>
      <button onClick={handleUpdateDate}>Update Published Date</button>
    </>
  )
}

export default Blog