import React from 'react';
import Menu from './components/Menu/Menu'
import styles from './App.module.css'
import NewsEditor from './containers/NewsEditor/NewsEditor'


class App extends React.Component {
  render(){
    return (
      <div className={styles.App}>
        <Menu />
        <NewsEditor />
      </div>
    );
  }
}

export default App;
