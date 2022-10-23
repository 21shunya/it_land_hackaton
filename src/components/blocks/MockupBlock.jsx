import React from 'react';
import cl from './MockupBlock.module.css'
import {moc_caption} from '../../data'

const MockupBlock = () => {
    return (
        <div className={cl.wrapper}>
            <a href={'https://alder-owner-5ea.notion.site/e887ac34cc8a4e919b86ca9cac6945a6'}>
                <img className={cl.img} src={'macbook.svg'} alt={''}/>
            </a>
            <div className={cl.caption}>{moc_caption}</div>
        </div>
    );
};

export default MockupBlock;