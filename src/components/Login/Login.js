import React, { useState } from 'react'
import styles from './Login.module.css'

const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handleUser = e => setUser(e.currentTarget.value)
    const handlePass = e => setPass(e.currentTarget.value)

    const login = (e) => {
        e.preventDefault()
        if(user.toLowerCase().trim() === 'login' && pass.toLowerCase().trim() === '12345')
            console.log()
    }
    return (
        <div className={styles.wrapp}>
            <h2>Войти в акаунт</h2>
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
                <button title='Войти' onClick={login} className={styles.loginButt}>Войти в акаунт</button>
                <a title='Форма регистрации' href='/signin' className={styles.unlogin}>не имеете акаунт?</a>
                {true && <p className={styles.logined}>Вы уже войшли</p>}
            </form>
        </div>
    )
}
export default Login