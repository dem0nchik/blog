import React from 'react'
import styles from './Widget.module.css'

const Widget = () => {
    return (
        <div className={styles.widget}>
            <form>
                <input type='search' placeholder='Поиск по сайту'/>
                <input value='поиск' type='submit' />
            </form>
            
            <div className={styles.link}>
                <p>Ссылки на соц. сети</p>
                <div className={styles.links}>
                    <a rel="noopener noreferrer" href='https://vk.com/whylights' target="_blank" title='vk'><span className={styles.linksVk}></span></a>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/fra_ys/' target="_blank" title='instagram'><span className={styles.linksInst}></span></a>
                </div>
            </div>

            <div className={styles.link}>
                <p>Последние новости</p>
                <span>...</span>
            </div>
        </div>
    )
}

export default Widget