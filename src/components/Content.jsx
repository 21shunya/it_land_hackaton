import React from 'react';
import {tagline} from '../data'
import cl from './Content.module.css'
import MainBlock from "./blocks/MainBlock";
import AboutBlock from "./blocks/AboutBlock";
import ForWhomBlock from "./blocks/ForWhomBlock";
import AuthorBlock from "./blocks/AuthorBlock";
import PriceBlock from "./blocks/PriceBlock";
import MockupBlock from "./blocks/MockupBlock";
import Tagline from "./blocks/Tagline";

const Content = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.four_blocks}>
                <div className={cl.three_blocks}>
                    <MainBlock />
                    <AboutBlock />
                    <ForWhomBlock />
                </div>
                <img id='content' className={cl.img} src={'directory_content.svg'} alt={''}/>
            </div>
            <div className={cl.tagline}>
                {tagline.map((item,idx) =>
                    <Tagline key={idx} trans={item.tilt} top={item.top} text={item.text}/>
                )}
            </div>
            <div className={cl.price_author_wrapper}>
                <MockupBlock />
                <PriceBlock />
                <AuthorBlock />
            </div>
        </div>
    );
};

export default Content;