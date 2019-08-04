import React from 'react'
import styles from './Menu.module.css'

class Menu extends React.Component {
    state = {
        isMobile: false,
        toggleMenu: true
    }
    
    componentDidMount() {
        if(window.innerWidth < 600)
            this.setState({ isMobile: true });
    }

    onClickMenu() {
        this.setState({toggleMenu: !this.state.toggleMenu});
    }

    menuItem() {
        return <>
                { this.state.isMobile ?
                    <div className={styles.menuButton} onClick={this.onClickMenu.bind(this)}>
                    <span></span> </div> :
                    <h2>Админ панель</h2> 
                }
                <ul>
                    <li><a href='/'>Управление новостями</a></li>
                    <li><a href='/'>Пользователи</a></li>
                    <li><a href='/'>Коментарии</a></li>
                    <li><a href='/'>Статистика</a></li>
                </ul>
                <div className={styles.overlay} onClick={this.onClickMenu.bind(this)}></div>
        </>
    }

    render() {
        return ( 
            <>
                {this.state.toggleMenu ?
                    <div className={`${styles.menu} ${styles.menuActive}`}> 
                        {this.menuItem()} </div> :
                    <div className={styles.menu}> 
                        {this.menuItem()} </div>
                }
            </>
        )
    }
} 

export default Menu