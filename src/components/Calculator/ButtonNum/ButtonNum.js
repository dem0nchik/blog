import React from 'react'
import styles from './ButtonNum.module.css'

const ButtonNum = props => {
    const zero = props.zero ? false : true
    const inputNum = e => {
        e.preventDefault()
        props.inputNum(e.currentTarget.innerText)
    }
    return (
        <div>
            { zero ?
                <span onClick={inputNum} className={styles.num}>{props.num}</span> :
                <span onClick={inputNum} className={`${styles.zero} ${styles.num}`}>{props.num}</span>
            }
        </div>
    )
}

export default ButtonNum