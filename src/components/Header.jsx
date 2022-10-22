import React from 'react';
import styled from 'styled-components';
import NavButton from "./NavButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;
`

const Header = () => {
    const tabs = ['О справочнике', 'Для кого', 'Содержание', 'Цены', 'Об авторе']
    return (
        <StyledDiv>
            <img src={'logo.svg'} alt={''}/>
            <Navbar>
                {tabs.map(tab =>
                    <NavButton key={tab}>{tab}</NavButton>
                )}
            </Navbar>
        </StyledDiv>
    );
};

export default Header;