import React from 'react';
import './App.css';
import Mainpage from './containers/Mainpage/Mainpage'
import Aboutpage from './containers/Aboutpage/Aboutpage'
import PostPage from './containers/PostPage/PostPage'
import Signin from './components/Signin/Signin'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Mainpage} />
        <Route exact path="/about" component={Aboutpage} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/login" component={Login} />        
        <Route exact path="/signin" component={Signin} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
