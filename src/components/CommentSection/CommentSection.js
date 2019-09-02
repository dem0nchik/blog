import React from 'react'
import styles from './CommentSection.module.css'
import CommentItem from './CommentItem/CommentItem'


class CommentSection extends React.Component {
    state = {
        isAuth: false
    }
    render() {
        return (
            <div className={styles.commentSection}>
                <div className={styles.head}>
                    Комментарии -
                    <span> 0</span>
                </div>

                { this.state.isAuth ?

                    <div className={styles.input_auth}>
                        <textarea rows="4" placeholder='Оставьте коментарий' />
                        <div className={styles.control}>
                            <button className={styles.add}>
                                Добавить комментарий
                            </button>
                            <button className={styles.cancel}>
                                Отмена
                            </button>
                        </div>
                    </div> :

                    <div className={styles.input_noauth}>
                        <a href='/login'>Войдите</a>
                        , чтобы оставить комментариий.
                    </div>                   

                }
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        )
    }
}

export default CommentSection