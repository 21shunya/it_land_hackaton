import React from 'react';
import cl from './AuthorBlock.module.css'
import {author} from '../../data'

const AuthorBlock = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.photo_wrapper}>
                <div>{author.title}</div>
                <img src={'photo.svg'} alt={''}/>
            </div>
            <div className={cl.info}>
                <img src={'name.svg'} alt={''}/>
                <div className={cl.text}>
                    <img className={cl.ellipse} src={'ellipse.svg'} alt={''}/>
                    <div>
                        {author.text.map(item =>
                            <div key={item}>{item}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBlock;