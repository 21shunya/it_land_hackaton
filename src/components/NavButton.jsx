import React from 'react';
import styled from "styled-components";

const StyledBtn = styled.a`
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #F9F9F9;

  text-decoration: none;
`

const NavButton = ({name, id}) => {
    return (
        <StyledBtn href={id}>
            {name}
        </StyledBtn>
    );
};

export default NavButton;