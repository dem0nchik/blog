import React from 'react'
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.postImg}>
                <img alt='' src='http://mybestladay.com/wp-content/uploads/bfi_thumb/IMG_5941-n7vcnm4c5hniikk7kou7bqm7bq0fxgxyah8yyd0ryg.jpg'/>
            </div>

            <div className={styles.mk}>
                <h2>FAVORITES: IDEAS FOR THE PERFECT GIRLS’ DAY OUT (GDO)</h2>
                <p>Some of our favorite coffee shops all across the city. Happy National Coffee Day!</p>
                <div className={styles.postMore}>
                    <a href='/'><i></i> читать подробнее</a>
                </div>
            </div>
        </div>
    )
}

export default Post