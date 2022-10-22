import React from 'react';
import cl from './Content.module.css'
import MainBlock from "./blocks/MainBlock";
import AboutBlock from "./blocks/AboutBlock";
import ForWhomBlock from "./blocks/ForWhomBlock";
import AuthorBlock from "./blocks/AuthorBlock";
import PriceBlock from "./blocks/PriceBlock";

const Content = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.four_blocks}>
                <div className={cl.three_blocks}>
                    <MainBlock />
                    <AboutBlock />
                    <ForWhomBlock />
                </div>
                <img className={cl.img} src={'directory_content.svg'}/>
            </div>
            <div className={cl.tagline}></div>
            <div className={cl.price_author_wrapper}>
                <PriceBlock />
                <AuthorBlock />
            </div>
        </div>
    );
};

export default Content;