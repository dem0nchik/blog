import React from 'react'
import styles from './Lines.module.css'

const Lines = props => {
    const handleChange = e => {
       props.chekedPost(props.id, e.currentTarget.checked)
    }
    return (
        <> 
            {props.withGrey &&
                <div className={styles.lines}>
                    <div className={styles.dateWrap}>
                        <span>{props.date.substring(0,10)}</span><span className={styles.dash}>-</span>
                    </div>
                    <div className={styles.titleWrap}>
                        <h4>{props.text}</h4>
                        <div>
                        <input onChange={handleChange} name='checkbox' type='checkbox' /></div>
                    </div>
                </div> }
            { !props.withGrey &&
                <div className={`${styles.lines} ${styles.withGrey}`}>
                    <div className={styles.dateWrap}>
                        <span>{props.date.substring(0,10)}</span><span className={styles.dash}>-</span>
                    </div>
                    <div className={styles.titleWrap}>
                        <h4>{props.text}</h4>
                        <input onChange={handleChange} name='checkbox' type='checkbox' />
                    </div>
                </div> }
        </>
    )
}

export default Lines