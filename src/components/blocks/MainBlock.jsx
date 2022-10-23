import React from 'react';
import cl from './MainBlock.module.css'
import PrimaryBtn from "../PrimaryBtn";
import {main_block} from '../../data'

const MainBlock = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.title_form}>
                <div className={cl.title}>
                    <div className={cl.header1}>{main_block.title}</div>
                    <div className={cl.header3}>{main_block.description}</div>
                </div>
                <PrimaryBtn />
            </div>
            <div className={cl.book_description}>
                <img src={'books.svg'} alt={''}/>
                <div>{main_block.book_description}</div>
            </div>
        </div>
    );
};

export default MainBlock;