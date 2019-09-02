import React from 'react'
import styles from './Articles.module.css'
import Article from './Article/Article'
import ArticleWithoutImg from './ArticleWithoutImg/ArticleWithoutImg'
import utilits from '../../utilits/utilits'
import Loader from '../Loader/Loader'
import config from '../../config'

class Articles extends React.Component {
    state = {
        templateArticles: []
    }

    templateArticles = () => {
        let link = '',title = '',
        img = '', text = '';

        let templateArticle = []
        if(this.props.data.length) {
            this.props.data.forEach(el=> {
                link = config.addr + '/posts/' + el._id;
                title = el.title
                el.mainImg ? img = el.mainImg : img = ''
                el.body[0].text[0] ? text = utilits.truncate(el.body[0].text[0]) : text =  ''
                    
                if(img)
                    templateArticle.unshift(<Article key={el._id} text={text} img={img} link={link} title={title} />)
                else 
                    templateArticle.unshift(<ArticleWithoutImg key={el._id}  text={text}  link={link} title={title} />)
            })
            return templateArticle
        }
    }
    render() {
        return (
            <div className={styles.articles}>
               {this.props.data ? 
                    this.templateArticles() :
                    <Loader /> 
                }
            </div>
        )
    }
}

export default Articles