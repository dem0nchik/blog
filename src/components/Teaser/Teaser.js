import React from 'react'
import styles from './Teaser.module.css'

const Teaser = () => {
    return (
        <div className={styles.teaser}>
            <img alt='' src='https://xcxlow.xyz/photo/teaser2.jpg'/>
            <div className={styles.fluid}>
                <h1>Блог Будюк</h1>
                <p>Это блог - который был разработан абсолютно в ручную.</p>
                <p>Здесь будут размещатся разные посты и мои мысли. Надеююсь он вам понравится</p>
            </div>
	    </div>
    )
}

export default Teaser