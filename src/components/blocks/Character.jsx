import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: ${({padding}) => padding}px;
  gap: 32px;

  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: ${({weight}) => weight};
  font-size: 24px;
  line-height: 33px;

  color: #120824;
  flex-shrink: 1;
`

const Character = (props) => {
    let weight
    if (props.index % 2 === 0) weight = 600
    else weight = 400

    return (
        <Container weight={weight} padding={props.padding}>
            <img src={props.img_path}/>
            <div>{props.text}</div>
        </Container>
    );
};

export default Character;