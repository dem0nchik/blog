import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Дима Будюк</h1>
            <h3>Краткая биография</h3>
            <p>Родился и живу в селе Витачов, Киевская область. Достаточно красивая местность.<br/>
            Мне 19 лет. Основные мои интересы - музыка, програмирование и бизнес. И я мечтаю добится, в каждой из этих сфер, больших высот :)</p>
        </div>
    )
}

export default About