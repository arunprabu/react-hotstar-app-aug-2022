import React from 'react'
import styled from 'styled-components';

const StyleCompDemo = () => {

  const Wrapper = styled.div`
    border:solid 1px red;
    background-color: yellow;
  `;

  const Heading3 = styled.h3`
    font-size: 26px;
    text-align:center;
    color: voilet ;
    background-color: lightgreen;
    padding: 10px 20px;
  `;

  const Button = styled.button`
    background-color: ${props => props.primary? 'aqua': 'red' };
    color: ${props => props.primary? 'black': '#fff' };
  `;

  return (
    <Wrapper>
      <Heading3>Contact Us</Heading3>
      <Button primary>Click Me</Button>
      <Button>Click Me</Button>
    </Wrapper>
  )
}

export default StyleCompDemo