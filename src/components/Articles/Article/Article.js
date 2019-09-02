import React from 'react'
import styles from './Article.module.css'

const Article = props => {
    console.log()
    return (
        <div className={styles.article}>
            <div className={styles.articleImg}>
                <a href={props.link.slice(10)}><img alt='' src={props.img}/></a>
            </div>

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

export default Article