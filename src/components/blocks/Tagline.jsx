import * as React from 'react';
import styled from "styled-components";

const Ticker = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background: #120824;
  height: 43px;
  width: 6000px;
  position: relative;
  top: ${({top}) => top};

  transform: rotate(${({trans}) => trans});
  
  font-family: 'Neue Metana Next Free Personal';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  color: #F9F9F9;
`

const Text = styled.span`
  animation: run 15s infinite linear;

  &:after {
    content: ${({text}) => text};
  }
  
  @keyframes run {
    0% {
      transform: translateX(2000px);
    }
    100% {
      transform: translateX(-2000px);
    }
  }
`

const Tagline = ({trans, top, text}) => {
    return (
        <Ticker trans={trans} top={top} text={text}>
            <Text>{text}</Text>
        </Ticker>
    );
};

export default Tagline;