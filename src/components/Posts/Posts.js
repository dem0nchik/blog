import React from 'react'
import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post />
            
            <Post />
            
            <Post />
        </div>
    )
}

export default Posts