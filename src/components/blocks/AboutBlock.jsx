import React from 'react';
import cl from './AboutBlock.module.css'
import {about_block} from '../../data'

const AboutBlock = () => {
    return (
        <div className={cl.wrapper}>
            <img src={'people.svg'}/>
            <div className={cl.about_info}>
                <div className={cl.title}>{about_block.title}</div>
                <div className={cl.text}>{about_block.text.map(item =>
                    <div>{item}</div>
                )}</div>
            </div>
        </div>
    );
};

export default AboutBlock;