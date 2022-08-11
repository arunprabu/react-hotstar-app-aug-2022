import React, { useState } from 'react'

const MyAccount = () => {
  console.log('Program Started');

  // we will get getter and setter
  const [ accountName, setAccountName ] = useState('john');
  
  const handleChangeName = () => {
    console.log('Inside handleChangeName');
    setAccountName('steve'); 
    // the above will exec the entire fn again with new value being initial value of hook
  }

  return (
    <>
      <h3>MyAccount</h3>
      <p>Account Name: {accountName}</p>

      <button onClick={handleChangeName}>Change Account Name</button>
    </>
  )
}

export default MyAccount