import React from 'react';
import cl from './AboutBlock.module.css'
import {about_block} from '../../data'

const AboutBlock = () => {
    return (
        <div className={cl.wrapper}>
            <img src={'people.svg'} alt={''}/>
            <div className={cl.about_info}>
                <div className={cl.title}>{about_block.title}</div>
                <div className={cl.text}>{about_block.text.map(item =>
                    <div key={item}>{item}</div>
                )}</div>
            </div>
        </div>
    );
};

export default AboutBlock;