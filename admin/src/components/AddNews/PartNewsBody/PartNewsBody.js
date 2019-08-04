import React from 'react'
import styles from './PartNewsBody.module.css'
import Textarea from 'react-textarea-autosize';

class PartNewsBody extends React.Component {
    state = {
        title: '',
        imgInputs: [null],
        textInputs: [null],
        filesInput: [],
        textsInput: [],
        imgpreviev: [],
        disableSubm: false,
        delete: false
    }

    //управление текстовыми полями
    handleImg = e => {
        const savedTarget = e.currentTarget;
        let imgSrc = undefined;
        if(savedTarget.files[0])
             imgSrc = window.URL.createObjectURL(savedTarget.files[0]);

        //перезаписывание файлов
        if(savedTarget.id < this.state.filesInput.length) {
            const newFilesInput = [];
            const newImgPreviews = [];
            for(let i = 0; i < this.state.filesInput.length; i++) {
                
                if(+savedTarget.id === i) {
                    newFilesInput[i] = savedTarget.files;
                    newImgPreviews[i] = <div key={savedTarget.id} className={styles.imgprevievWrap}>
                                            <img className={styles.imgpreviev} src={imgSrc} alt='' />
                                            <span>картинка {+savedTarget.id+1}</span>
                                        </div>
                    
                } else {
                    newFilesInput[i] = this.state.filesInput[i];
                    newImgPreviews[i] = this.state.imgpreviev[i];
                }
            }
            this.setState({
                filesInput: newFilesInput,
                imgpreviev: newImgPreviews
            });

        } else {
            //добавление новых файлов
            if(savedTarget.files[0].type === "image/jpeg" ||
            savedTarget.files[0].type === "image/png") {
                this.setState(state => {
                    const list = state.filesInput.push(savedTarget.files);
                    return { list, value: '' };
                });

                this.setState(state => {
                    let list = state.imgpreviev.push(
                        <div key={savedTarget.id} className={styles.imgprevievWrap}>
                            <img className={styles.imgpreviev} src={imgSrc} alt='' />
                            <span>картинка {+savedTarget.id+1}</span>
                        </div>
                    );
                    return { list, value: '' };
                });

            } else {
                this.setState(state => {
                    const list = state.filesInput.push('');
                    return { list, value: '' };
                });
            } 
        }
    }

    addPreview = () => this.state.imgpreviev[this.state.imgInputs.length]
    
    //Добавление файлового поля
    addInputPhoto = e => {
        e.preventDefault()
        if(this.state.imgInputs.length === this.state.filesInput.length) {
            this.setState(state => {
                const list = state.imgInputs.push(

                        <label key={this.state.imgInputs.length} className={styles.imgInputsLabel}>
                            <input 
                                id={this.state.imgInputs.length}
                                onInput={this.handleImg}
                                type="file" 
                                name="image" 
                            />Выбратъ/Изменить картинку {this.state.filesInput.length+1} 
                        </label>

                );
                return { list, value: '' };
            });
        }
    }

    //Добавление текстового поля
    addInputText = e => {
        e.preventDefault()

        const texts = this.state.textsInput
        if(texts[texts.length-1]) {
            this.setState(state => {
                const list = state.textInputs.push(
                    <Textarea  
                        className={styles.inputText}
                        id={this.state.textInputs.length} 
                        key={Date.now()} 
                        placeholder='Текст' 
                        type='textarea' 
                        name='text' 
                        onChange={this.handleText}
                    />
                );
                return { list, value: '' };
            })

            this.setState(state => {
                const list = state.textsInput.push('');
                return { list, value: '' };
            })
        }
    }

    //Управление текстовыми полями
    handleText = e => {
        let newTextsInput = [];
        
        for(let i = 0; i < this.state.textInputs.length; i++) {
            if(+e.currentTarget.id === i) {
                newTextsInput[i] = e.currentTarget.value
            } else {
                newTextsInput[i] = this.state.textsInput[i];
            }
        }
        this.setState({textsInput: newTextsInput});
    }
    handleTitle = e => this.setState({title: e.currentTarget.value })

    handleAccept = e => {
        e.preventDefault()
        const {title, filesInput, textsInput} = this.state
        this.props.partBody(title, textsInput, filesInput )
        this.setState({disableSubm: true, delete: true})
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deletePart(this.props.id)
    }


    render() {
        return(
            <div className={styles.partBody}>
                <Textarea className={styles.inputTitle} value={this.state.title} onChange={this.handleTitle} placeholder='Подзаголовок' type='text' name='title' />

 
                <div className={styles.inputTextWrap}>
                    <Textarea className={styles.inputText} id='0' placeholder='Текст' type='textArea' name='text' onChange={this.handleText}/>
                    {this.state.textInputs.map(item => item)}
                </div>

                <button className={styles.addInputText} onClick={this.addInputText}>Добавить новый текст</button>
                
                <div className={styles.imgInputsWrap}>
                    <div className={styles.previews}>
                        {this.state.imgpreviev.map(item => item)}
                    </div>

                    <div className={styles.lables}>
                        <label className={styles.imgInputsLabel}>
                            <input onInput={this.handleImg} id='0' type="file" name="image" />Выбрать/Изменить картинку 1 
                        </label>

                        {this.state.imgInputs.map(item => item)}
                    </div>
                    
                </div>
                <button className={styles.addInputPhoto} onClick={this.addInputPhoto}>Добавить новое фото</button>

                <button onClick={this.handleAccept} className={styles.acceptButton} disabled={this.state.disableSubm}>Готово</button>
                <div className={styles.acceptedWrap}>
                    {this.state.disableSubm && <p className={styles.accepted}>Сохранено</p>}
                    {this.state.delete && <i onClick={this.handleDelete} title='Удалить блок'></i>}
                </div>

            </div>
        )
    }
}

export default PartNewsBody