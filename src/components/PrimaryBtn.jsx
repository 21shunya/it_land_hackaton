import React from 'react';
import styled from "styled-components";

const StyledBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 36px;
  gap: 10px;
  background: #0B3CEE;
  border: none;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #F9F9F9;

  &:hover {
    box-shadow: 0px 4px 20px rgba(32, 41, 64, 0.3);
  }
  &:active {
    background: #13319E;
  }
`
const PrimaryBtn = () => {
    return (
        <StyledBtn>
            Купить
        </StyledBtn>
    );
};

export default PrimaryBtn;