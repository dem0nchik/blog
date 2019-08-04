import React from 'react'
import styles from './Article.module.css'

const Article = () => {
    return (
        <div className={styles.article}>
            <div className={styles.articleImg}>
                <img alt='' src='http://mybestladay.com/wp-content/uploads/bfi_thumb/IMG_5941-n7vcnm4c5hniikk7kou7bqm7bq0fxgxyah8yyd0ryg.jpg'/>
            </div>

            <div className={styles.mk}>
                <h2>FAVORITES: IDEAS FOR THE PERFECT GIRLS’ DAY OUT (GDO)</h2>
                <p>Some of our favorite coffee shops all across the city. Happy National Coffee Day!</p>
                <div className={styles.articleMore}>
                    <a href='/'><i></i> читать подробнее</a>
                </div>
            </div>
        </div>
    )
}

export default Article