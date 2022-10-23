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
    const tabs = [
        {name: 'О справочнике', id: '#about'},
        {name: 'Для кого', id: '#for'},
        {name: 'Содержание', id: '#content'},
        {name: 'Цены', id: '#price'},
        {name:'Об авторе', id: '#author'}]
    return (
        <StyledDiv>
            <img src={'logo.svg'} alt={''}/>
            <Navbar>
                {tabs.map(tab =>
                    <NavButton key={tab} name={tab.name} id={tab.id} />
                )}
            </Navbar>
        </StyledDiv>
    );
};

export default Header;