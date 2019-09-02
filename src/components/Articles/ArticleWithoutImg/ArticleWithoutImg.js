import React from 'react'
import styles from './ArticleWithoutImg.module.css'

const ArticleWithoutImg = props => {
    return (
        <div className={styles.article}>
            <div className={styles.mk}>
                <a href={props.link.slice(10)}><h3>{props.title}</h3></a>
                <p>{props.text}</p>
                <div className={styles.articleMore}>
                    <a href={props.link.slice(10)}><i></i> читать подробнее</a>
                </div>
            </div>
        </div>
    )
}

export default ArticleWithoutImg