import React, { useState } from 'react'
import styles from './Signin.module.css'

const Signin = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const handleUser = e => setUser(e.currentTarget.value)
    const handlePassRepeat = e => setPassRepeat(e.currentTarget.value)
    const handlePass = e => setPass(e.currentTarget.value)

    const signin = (e) => {
        e.preventDefault()
        if(user.toLowerCase().trim() === 'login' && pass.toLowerCase().trim() === '12345')
            console.log()
    }
    return (
        <div className={styles.wrapp}>
            <h2>Зарегистрироватся</h2>
            <form>
                <input className={styles.user}
                       type='text' 
                       placeholder='Логин' 
                       value={user} 
                       onChange={handleUser}
                />
                <input 
                       className={styles.pass}
                       type='password' 
                       placeholder='Пароль'
                       value={pass} 
                       onChange={handlePass}
                />
                <input 
                    className={styles.pass}
                    type='password' 
                    placeholder='Повторите пароль'
                    value={passRepeat} 
                    onChange={handlePassRepeat}
                />
                <button onClick={signin}>Зарегистрироватся</button>
                {true && <p className={styles.err}>Вы допустили ошибку</p>}
            </form>
        </div>
    )
}
export default Signin