import React from 'react'
import gif from './5.gif'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
        <img alt='loader' src={gif} />
        </div>
    )
}

export default Loader