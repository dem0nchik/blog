import React from 'react'
import styles from './NewsEditor.module.css'
import EditNews from '../../components/EditNews/EditNews'
import AddNews from '../../components/AddNews/AddNews'
import RemoveNews from '../../components/RemoveNews/RemoveNews'

class NewsEditor extends React.Component {
    state= {
        changeComponents: <AddNews />
    }
    changeComponents = (e) => {
        const name = e ? e.currentTarget.name : '';
        let chngCom = undefined;
        switch(name) {
            case 'add':
                chngCom = <AddNews />
                this.setState({changeComponents: chngCom})
                break
            case 'edit':
                chngCom = <EditNews />
                this.setState({changeComponents: chngCom})
                break
            case 'delete':
                chngCom = <RemoveNews />
                this.setState({changeComponents: chngCom})
                break
            default:
                chngCom = <>asd</>
                this.setState({changeComponents: chngCom})
        }
    }
    render() {
        return (
            <div className={styles.newsEditor}>
                <div  className={styles.changeComponents}>
                    <div  className={styles.changeComponentsWrap}>
                        <button onClick={this.changeComponents} title='Добавить новость' name='add'>Добавить новость</button>
                        <button onClick={this.changeComponents} title='Редактировать новость' name='edit'>Редактировать новость</button>
                        <button onClick={this.changeComponents} title='Удалить новость' name='delete'>Удалить новость</button>
                    </div>
                </div>

                <div>
                    {this.state.changeComponents}
                </div>
            </div>
        )
    }
}

export default NewsEditor