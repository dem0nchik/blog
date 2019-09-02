import React from 'react'
import Post from '../../components/Post/Post'
import Widget from '../../components/Widget/Widget'
import CommentSection from '../../components/CommentSection/CommentSection'
import styles from './PostPage.module.css'

const PostPage = () => {
    return (
        <div>
            <div className={styles.postpage}>
                <div className={styles.content}>
                    <div>
                        <Post />
                        <CommentSection />
                    </div>
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default PostPage