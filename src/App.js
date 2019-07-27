import React from 'react';
import './App.css';
import Mainpage from './containers/Mainpage/Mainpage'
import Aboutpage from './containers/Aboutpage/Aboutpage'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Mainpage} />
        <Route path="/about" component={Aboutpage} />
        <form action='http://localhost:3003/api' method='post' encType='multipart/form-data'>
          <input type='file' name='image'/>
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </Router>
  );
}

export default App;
