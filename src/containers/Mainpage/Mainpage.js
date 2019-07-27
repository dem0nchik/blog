import React from 'react'
import styles from './Mainpage.module.css'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Widget from '../../components/Widget/Widget'
import Footer from '../../components/Footer/Footer'

const Mainpage = () => {
    return (
        <div className={styles.mainpage}>
            <Header />
            <div className={styles.content}>
                <Posts />
                <Widget />
            </div>
            <Footer />
        </div>
    )
}

export default Mainpage