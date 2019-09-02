import React from 'react'
import styles from './CommentItem.module.css'

const CommentItem = props =>  {
    //const {name, date, text}= props
    return (
        <div className={styles.commentItem}>
            <div className={styles.top}>
                <span className={styles.userName}>Dima </span>
                <span className={styles.date}> — 13.08.2019, 13:04</span>
            </div>
            <div className={styles.text}>
                <p>Дайте для начала гражданство хотя бы Супрун. А то зам.министра здравохранения в Украине,вопреки законодательству, гражданка США.</p>
            </div>
        </div>
    )
}

export default CommentItem