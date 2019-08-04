import React from 'react'
import styles from './Mainpage.module.css'
import Articles from '../../components/Articles/Articles'
import Widget from '../../components/Widget/Widget'

const Mainpage = () => {
    return (
        <div className={styles.mainpage}>
            <div className={styles.content}>
                <Articles />
                <Widget />
            </div>
        </div>
    )
}

export default Mainpage