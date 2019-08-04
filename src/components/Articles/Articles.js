import React from 'react'
import styles from './Articles.module.css'
import Article from './Article/Article'

const Articles = () => {
    return (
        <div className={styles.articles}>
            <Article />
            
            <Article />
            
            <Article />
        </div>
    )
}

export default Articles