import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <p>Сделано с любовью и кофе :)</p>
            <p className={styles.author}>Дима Будюк | 2019</p>
        </footer>
    )
}

export default Footer