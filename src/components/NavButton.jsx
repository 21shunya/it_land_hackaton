import React from 'react';
import styled from "styled-components";

const StyledBtn = styled.div`
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #F9F9F9;
`

const NavButton = (props) => {
    return (
        <StyledBtn {...props}>
            
        </StyledBtn>
    );
};

export default NavButton;