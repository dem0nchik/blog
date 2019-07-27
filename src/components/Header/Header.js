import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <ul>
                <li>
                    <a href='/'>Главная</a>
                </li>
                <li>
                    <a href='/'>Новости</a>
                </li>
                <li>
                    <a href='/about'>Обо мне</a>
                </li>
                <li>
                    <a href='/'>Интересное</a>
                </li>
            </ul>
        </div>
    )
}

export default Header