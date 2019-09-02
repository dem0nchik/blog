import React from 'react'
import styles from './MainPage.module.css'
import Articles from '../../components/Articles/Articles'
import Widget from '../../components/Widget/Widget'
import Teaser from '../../components/Teaser/Teaser'
class MainPage extends React.Component {
    
    render() {
        return (
            <div className={styles.mainpage}>
                <Teaser />
                <div className={styles.content}>
                    <Articles data={this.props.data.data} />
                    <Widget />
                </div>
            </div>
        )
    }
}

export default MainPage