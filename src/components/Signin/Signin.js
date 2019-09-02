import React from 'react'
import styles from './Signin.module.css'

class Signin extends React.Component {
    state = {
        user: '',
        pass: '',
        passRepeat: '',
        message: ''
    }
    handleUser = e => this.setState({user: e.currentTarget.value})
    handlePassRepeat = e => this.setState({passRepeat: e.currentTarget.value})
    handlePass = e => this.setState({pass: e.currentTarget.value})

    signin = (e) => {
        e.preventDefault()
        this.setState({message: ''})
        const {user, pass, passRepeat} = this.state

        if(user.trim() && pass.trim()) {
            if(pass.trim() === passRepeat.trim()){
                this.props.signin(user, pass)
            }
            else this.setState({message: 'Пароли не совпадают'})
        }
        else this.setState({message: 'Заполните все данные'})
    }
    render() {
        const {user, pass, passRepeat, message} = this.state
        return (
            <div className={styles.wrapp}>
                <h2>Зарегистрироватся</h2>
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
                    <input 
                        className={styles.pass}
                        type='password' 
                        placeholder='Повторите пароль'
                        value={passRepeat} 
                        onChange={this.handlePassRepeat}
                    />
                    <button onClick={this.signin}>Зарегистрироватся</button>
                    <p className={styles.err}>{message}</p>
                    <p className={styles.err}>{this.props.message}</p>
                   
                </form>
            </div>
        )
    }
}
export default Signin