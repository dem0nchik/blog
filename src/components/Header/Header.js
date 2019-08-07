import React, { useState } from 'react'
import style from './Header.module.css'

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [overlay, setOvarlay] = useState(false)
    const handleToggle = () => { 
        setOvarlay(!overlay)
        setToggle(!toggle) 
    }
    return (
        <div className={style.header}>
            {overlay && <div onClick={handleToggle} className={style.overlay}></div> }
            <ul>
                <li title='Главная' onClick={() => setToggle(true)} className={style.li}>
                    <a href='/'>Главная</a>
                </li>

                <li className={style.litoggle}>
                    <button title='Все что вас интересует' onClick={() => handleToggle()}>Интересное</button>
                    { toggle ?
                        <ul className={`${style.ultoggle} ${style.ultoggled}`}></ul> :
                        <ul className={style.ultoggle}> <div>
                            <li title='Новости'>
                                <a href='/'>Новости</a>
                            </li>
                            <li title='Обо мне'>
                                <a href='/about'>Обо мне</a>
                            </li>
                        </div> </ul>
                    }
                </li>
                 
                <li title='Логин' onClick={() => setToggle(true)} className={style.li}>
                    <a href='/login'>Логин</a>
                </li>
            </ul>
        </div>
    )
}

export default Header