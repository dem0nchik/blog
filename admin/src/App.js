import React from 'react';
import Menu from './components/Menu/Menu'
import styles from './App.module.css'
import NewsEditor from './containers/NewsEditor/NewsEditor'


class App extends React.Component {
  state ={
    start: '',
    swiped: false
  }
  touch = e => {
    this.setState({start: e.changedTouches[0].pageX})
  }
  end = e => {
      if(e.changedTouches[0].pageX - this.state.start > 80) {
        this.setState({swiped: true})
      }
  }
  onClosedMenu = () => {
    this.setState({swiped: false})
  }
  render(){
    return (
      <div onTouchEnd={this.end} onTouchStart={this.touch} className={styles.App}>
        <Menu onClosedMenu={this.onClosedMenu} onSwiped={this.state.swiped} />
        <NewsEditor />
      </div>
    );
  }
}

export default App;
