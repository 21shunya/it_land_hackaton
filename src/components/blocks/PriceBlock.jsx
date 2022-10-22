import React from 'react';
import cl from './PriceBlock.module.css'
import {price} from '../../data'
import PriceCard from "./PriceCard";

const PriceBlock = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.title}>{price.title}</div>
            <div className={cl.benefits}>
                {price.benefits.map(item =>
                    <div key={item}>{item}</div>
                )}
            </div>
            <div className={cl.cards}>
                {price.price_card.map((item, index) =>
                    <PriceCard key={index} item={item}/>
                )}
            </div>
        </div>
    );
};

export default PriceBlock;