import React from 'react'
import styles from './RemoveNews.module.css'
import Lines from './Lines/Lines'
import Textarea from 'react-textarea-autosize';
import config from '../../config'

class RemoveNews extends React.Component {
    state = {
        data: [],
        titles: [],
        chekedList: null,
        deletedCount: undefined,
    }

    componentDidMount() {
        fetch(config.backEnd+"/posts/")
            .then(res => res.json())
            .then(res => {
                this.setState({data: res}) 
                this.renderListPost(res)
            })
            
    }
    renderListPost = (data) => {
        let chekedList = []
        if(data[0]) {
            const templateTitles = data.map((el, i) => {

                if(i % 2 === 0) {
                    chekedList.push({id: el._id, checked: false})
                    return <Lines chekedPost={this.chekedPost} id={el._id} key={i} date={el.date} text={el.title} withGrey={true} />
                }
                else {
                    chekedList.push({id: el._id, checked: false})
                    return <Lines chekedPost={this.chekedPost} id={el._id} key={i} date={el.date} text={el.title} withGrey={false} />
                }
            })
            this.setState({titles: templateTitles, chekedList: chekedList})
        }
    }

    chekedPost = (id, cheked) => {
        const newCheckedList = this.state.chekedList.map(el => {
            if(el.id === id)
                return {id: id, checked: cheked}
            return el
        })
        this.setState({chekedList: newCheckedList})
    }
    fetchRequests = async (list) => {
        return new Promise(resolve => {
            let fetches = [];
        
            let countDelete = 0
            list.forEach(el => {
                if(el.checked) {
                    fetches.push(
                    fetch(config.backEnd+"/posts/" + el.id, { method: 'delete' })
                    .then(res => res.json())
                    .then(res => {
                        if(res.deletedCount)
                            countDelete++
                    })
                    .catch((status, err) => {return console.log(status, err);})
                    );
                }
            })
            Promise.all(fetches).then(() => {            
                resolve(countDelete);            
            });
          });
        
    }
    deletePosts = async () => {
        if(this.state.chekedList){
            this.fetchRequests(this.state.chekedList).then(res => {
                alert('succesful delete '+res + ' posts')
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            })  
        }            
    }

    render() {
        return (
            <div className={styles.remove}>
                <p>Посты</p>
                {this.state.deletedCount && <p>Удалено</p>}
                <div className={styles.actionWrap}>
                    <form className={styles.form}>
                        <Textarea />
                        <button>Поиск</button>
                    </form>
                    <button title='Удалить выбраные новости' 
                            className={styles.deleteButton}
                            onClick={this.deletePosts}>Удалить</button>
                </div>

                {this.state.data[0] && this.state.titles.map(el => el)}
            </div>
        )
    }
}

export default RemoveNews