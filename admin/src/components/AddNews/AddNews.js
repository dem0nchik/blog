import React from 'react'
import styles from './AddNews.module.css'
import PartNewsBody from './PartNewsBody/PartNewsBody'
import Textarea from 'react-textarea-autosize';
import getDate from '../../utilit/getDate';
import config from '../../config'
class AddNews extends React.Component {
    state = {
        title: '',
        img: null,
        body: [],
        imgpreviev: null,
        partsBody: [],
        sended: false,
        err: false,
    }

    componentDidMount() {
        this.setState(state => {
            const list = state.partsBody.push(
                <PartNewsBody 
                    deletePart={this.deletePart} 
                    id={this.state.partsBody.length} 
                    key={Date()} 
                    partBody={this.partBody}
                /> );
            return { list, value: '' };
        })
    }
    sendData = e => {
        const {title, img, body} = this.state
        const formData = new FormData();
        if(img)
            formData.append('mainImg', img);

        if(body.length) {
            body.forEach((el, i) => {
            if(el.img) {
                el.img.forEach(el => {
                    formData.append('file'+i, el[0])
                })
            }

            if(el.text)
                el.text.forEach(el => formData.append('text'+i, el))

            if(el.title)
                formData.append('bodyTitle', el.title)
            else 
                formData.append('bodyTitle', '.')
            })
        }
        
        if(title)
            formData.append('title', title)
        e.preventDefault()

        formData.append('date', getDate(new Date()))

        this.setState({errMessage: ''})
        if(body.length && title) {
            fetch(config.backEnd+'/posts', { 
                method: 'POST',
                body: formData,
            })
            
            this.setState({sended: true, err: false})
        } else {
            this.setState({err: true})
        }
    }
    
    handleTitle = e => this.setState({title: e.currentTarget.value })

    imgSelect = e => {
        if(e.currentTarget.files[0]){
            this.setState({img: e.currentTarget.files[0]})
            const imgSrc = window.URL.createObjectURL(e.currentTarget.files[0]);
            this.setState({imgpreviev: <img key={Date()} className={styles.imgpreviev} src={imgSrc} alt='' />})
        }
    }

    addNewPartBody = e => {
        if(e) e.preventDefault()
        this.setState(state => {
            const list = state.partsBody.push(
                <div key={Date()}>
                    <p className={styles.newsPartBody}>Новая часть поста</p>
                    <PartNewsBody deletePart={this.deletePart} id={this.state.partsBody.length} key={Date()} partBody={this.partBody} />
                </div>
            );
            return { list, value: '' };
        })
    }

    partBody = (title, texts, images) => {
        const body = {
            title: title,
            text: texts,
            img: images
        }
        this.setState(state => {
            const list = state.body.push(body);
            return { list, value: '' };
        })
        this.addNewPartBody()
    }

    deletePart = (id) => {
        this.setState(state => {
            const list = state.partsBody.splice(id, 1);
            return { list, value: '' };
        })
        this.setState(state => {
            const list = state.body.splice(id, 1);
            return { list, value: '' };
        })
    }

    render() {
        return (
            <div className={styles.addNews}>
                <form method="post" encType="multipart/form-data">
                    <label className={styles.titleMain}>
                        <span>Заголовок Новости</span><Textarea onChange={this.handleTitle} value={this.state.title} minRows={1} placeholder='Заголовок' name='title'/>
                    </label>

                    <div className={styles.imgMainWrap}>
                        <label className={styles.imageMain} title='Выберите файл'>
                            Выбрать превью картинки<input onInput={this.imgSelect} title='Главная картинка' type="file" name="image" />
                        </label>
                        {this.state.imgpreviev}
                    </div>

                    <div className={styles.addNewPartBody}>
                        <button onClick={this.addNewPartBody}>Добавить новый блок</button>
                    </div>
 
                    {this.state.partsBody.map(item => item)}

                    <div className={styles.sendedWrap}>
                        <button className={styles.sended} onClick={this.sendData} type="submit">Отправить</button>
                        {this.state.sended && <p className={styles.arrived}>Отправлено</p>}
                        {this.state.err && <p className={styles.err}>Не заполнены даные</p>}
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNews