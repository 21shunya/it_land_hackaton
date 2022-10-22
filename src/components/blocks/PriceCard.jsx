import React from 'react';
import styled from "styled-components";
import PrimaryBtn from "../PrimaryBtn";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 36px;
  gap: 28px;

  background: ${({color}) => color};
`
const Title = styled.div`
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #120824;
`
const Price = styled.div`
  font-family: 'Neue Metana Next Free Personal';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 35px;
  color: #120824;
`

const PriceCard = ({item}) => {
    return (
        <Card color={item.color}>
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
            <PrimaryBtn />
        </Card>
    );
};

export default PriceCard;