import React from 'react'
import styles from './ButtonAct.module.css'

const ButtonAct = props => {
    const equals = props.equals ? false : true
    const inputAct = e => {
        e.preventDefault()
        props.action(e.currentTarget.innerText)
    }
    return (
        <div>
            { equals ?
                <span onClick={inputAct} className={styles.act}>{props.act}</span> :
                <span onClick={inputAct} className={`${styles.equals} ${styles.act}`}>{props.act}</span>
            }            
        </div>
    )
}

export default ButtonAct