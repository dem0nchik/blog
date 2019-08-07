import React from 'react'
import styles from './Mainpage.module.css'
import Articles from '../../components/Articles/Articles'
import Widget from '../../components/Widget/Widget'

class Mainpage extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://xcxlow.xyz/api/posts', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer: token',
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : true
            }
        })
        .then(res => res.json())
        .then(res => this.setState({data: res}) )
    }
    render() {
        return (
            <div className={styles.mainpage}>
                <div className={styles.content}>
                    <Articles data={this.state.data} />
                    <Widget />
                </div>
            </div>
        )
    }
}

export default Mainpage