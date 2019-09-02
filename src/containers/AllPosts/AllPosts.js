import React from 'react'
import styles from './AllPosts.module.css'
import Articles from '../../components/Articles/Articles'
import Widget from '../../components/Widget/Widget'

class AllPosts extends React.Component {
    
    render() {
        return (
            <div className={styles.allposts}>
                <div className={styles.content}>
                    <Articles data={this.props.data.data} />
                    <Widget />
                </div>
            </div>
        )
    }
}

export default AllPosts