import React from 'react';
import Users from '../../containers/Users/Users';
import applyStyles from '../../hoc/applyStyles';
import Bye from './Bye';
import Hello from './Hello';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const Concepts = () => {
  return (
    <div>
      <h1>Concepts</h1>

      <h2>HOC | Demo</h2>
      <StyledHello name="Steve"></StyledHello>
      <StyledBye name='Steve'></StyledBye>

      <hr/>
      <h2>AJAX Call | Demo</h2>

      <Users />
    </div>
  )
}

export default Concepts