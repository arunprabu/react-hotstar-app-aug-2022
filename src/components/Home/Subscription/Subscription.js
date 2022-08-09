import React from 'react'
import './Subscription.css'; // external -- comp-specific styles

// Internal and Inline Styles
const Subscription = () => {

  const myStyles = { 
    paraStyles: {
      backgroundColor: 'yellow', 
      color: '#000', 
      textAlign: 'center'
    },
    btnStyles: {
      border: 'solid 1px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px'
    }
  }

  return (
    <div className='text-center'>
      {/* External style */}
      <h3 className='heading3'>You are an active Subscriber!</h3>
      {/* Inline Style - Never ever try this in loops */}
      <p style={ { backgroundColor: 'red', color: '#fff', textAlign: 'center' } }>Your subscription ends in 15 days</p>

      {/* Internal Style */}
      <p style={ myStyles.paraStyles  } >You can renew now at 50% discount. Use coupon: OFFER50</p>
      <button type='button' style={myStyles.btnStyles}>RENEW NOW</button>
    </div>
  )
}

export default Subscription