import React from 'react'
import styles from './Login.module.css'

class Login extends React.Component {
    state = {
        user: '',
        pass: '',
        message: ''
    }
    handleUser = e => this.setState({user: e.currentTarget.value})
    handlePass = e => this.setState({pass: e.currentTarget.value})

    login = (e) => {
        e.preventDefault()
        this.setState({message: ''})
        const {user, pass} = this.state

        if(user.trim() && pass.trim()) {
            this.props.login(user, pass)
        }
        else this.setState({message: 'Заполните все данные'})
    }
    render() {
        const {user, pass, message} = this.state
        return (
            <div className={styles.wrapp}>
                <h2>Войти в акаунт</h2>
                <form>
                    <input className={styles.user}
                        type='text' 
                        placeholder='Логин' 
                        value={user} 
                        onChange={this.handleUser}
                    />
                    <input 
                        className={styles.pass}
                        type='password' 
                        placeholder='Пароль'
                        value={pass} 
                        onChange={this.handlePass}
                    />
                    <button title='Войти' onClick={this.login} className={styles.loginButt}>Войти в акаунт</button>
                    <a title='Форма регистрации' href='/signin' className={styles.unlogin}>не имеете акаунт?</a>
                    <p className={styles.err}>{message}</p>
                </form>
            </div>
        )
    }
}
export default Login