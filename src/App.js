import React from 'react';
import './App.css';
import AllPosts from './containers/AllPosts/AllPosts'
import MainPage from './containers/MainPage/MainPage'
import Aboutpage from './containers/Aboutpage/Aboutpage'
import PostPage from './containers/PostPage/PostPage'
import Signin from './components/Signin/Signin'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Calculator from './components/Calculator/Calculator'
import { connect } from 'react-redux'
import { getPosts, signin, login } from './actions/actionCreator.js'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
      fetch('https://xcxlow.xyz/api/posts', {
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
      .then(data => this.props.getPosts(data))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <MainPage data={this.props.posts} />} />
          <Route exact path="/allposts" render={() => <AllPosts data={this.props.posts} />} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route exact path="/calc" component={Calculator} />
          <Route exact path="/login" render={() => <Login login={this.props.login} />} />     
          <Route exact path="/signin" render={() => <Signin signin={this.props.signin} 
                                                            message={this.props.users.messageSignin} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect(state => ({
  users: state.users,
  posts: state.posts,
}), {getPosts, signin, login})(App)
