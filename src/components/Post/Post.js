import React from 'react'
import styles from './Post.module.css'
import Loader from '../Loader/Loader'

class Post extends React.Component {
    state = {
        data: null,
        err: ''
    }
    bodyPost = (data) => {
        let templatePostBody = null,
            templTxt = null,
            templImg = null,
            title = null;

        if(data.body.length)  {
            templatePostBody = data.body.map( (item, i) => {
                templTxt = item.text.map( (item, i) => <p key={i}>{item}</p> )
                templImg = item.img.map( (item, i) => <img src={item} alt='' key={i} /> )
                item.title ? 
                    title =  <h3>{item.title}</h3> :
                    title = null;

                return  <div key={i} className={styles.article}>
                            {title}
                            {templTxt}
                            <div className={styles.mainImg}>
                                {templImg}
                            </div>
                        </div>
            })
            return templatePostBody;
        }
        else return <></>
    }

    componentDidMount() {
        fetch('https://xcxlow.xyz/api'+ window.location.pathname, {
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
        .then(res => {
            res.message ?
                this.setState({err: <p className={styles.err}>Пост отсувствует</p>}) :
                this.setState({data: res}) 
        }).catch(err => {
            this.setState({err: <p className={styles.err}>Пост отсувствует</p>})
            console.error(err)
        })
    }
    render() {
        
        return (
           <div className={styles.post}>
               
                {this.state.data ? <>
                    <div className={styles.mainImg}>
                        <img  width='900' height='450' src={this.state.data.mainImg} alt=''/>
                    </div>
                    <h1>{this.state.data.title}</h1>
                    <div className={styles.info}>
                        <span>Дата: {this.state.data.date.substring(0,10)}</span>
                        <span><i>{this.state.data.views}</i></span>
                    </div> 
                    <div className={styles.body}>
                    {this.state.data && this.bodyPost(this.state.data)}
                    </div>
                    </> :
                    <>{this.state.err || <Loader />}</>
                }
                
            </div>
        )
    }
}

export default Post