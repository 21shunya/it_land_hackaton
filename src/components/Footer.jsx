import React from 'react';
import {footer} from '../data'
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  order: 2;
`

const Inscription = styled.div `
  font-family: 'Neue Metana Next Free Personal';
  font-style: normal;
  font-weight: 600;
  font-size: 381.837px;
  line-height: 412px;
  color: #C1AAC6;
  opacity: 0.5;
  width: 2000px;

  animation: run 7s infinite linear;

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

const StyledText = styled.div `
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  color: #F9F9F9;
`

const Footer = () => {
    return (
        <Container>
            <Inscription>{footer.big_inscription}</Inscription>
            <StyledText>{footer.info.map((item, index) =>
                <div key={index}>{item}</div>
            )}</StyledText>
        </Container>
    );
};

export default Footer;