import React from 'react';
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
    </div>
  )
}

export default Concepts