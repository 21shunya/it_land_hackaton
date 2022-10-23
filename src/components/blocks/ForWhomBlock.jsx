import React from 'react';
import cl from './ForWhomBlock.module.css'
import {for_whom} from '../../data'
import Character from "./Character";

const ForWhomBlock = () => {
    const padding = 304
    return (
        <div id='for' className={cl.wrapper}>
            <div className={cl.title}>{for_whom.title}</div>
            <div className={cl.characters}>
                {for_whom.characters.map((item, index) =>
                    <Character
                        key={index}
                        img_path={item.img_path}
                        text={item.text}
                        padding={index*padding}
                        index={index}
                    />
                )}
            </div>
        </div>
    );
};

export default ForWhomBlock;