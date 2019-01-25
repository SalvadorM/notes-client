import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

//private route
import {PrivateRoute} from './utilities/privateRouter'

//import components 
import Header from './components/header/Header'
import Login from './components/user/scene/Login'
import Register from './components/user/scene/Register'
import Home from './components/home/Home'
import Post from './components/post/scene/Post'
import UserPosts from './components/post/scene/UserPosts'
import PostForm from './components/post/form/PostForm'
import NoteHub from './components/note/scene/Note'
import Search from './components/search/scene/Search'


class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <PrivateRoute exact path="/search/" component={Search}/>
            <PrivateRoute exact path="/post/new" component={PostForm}/>
            <PrivateRoute exact path="/notes/" component={NoteHub}/>
            <PrivateRoute exact path="/user" component={UserPosts}/>
            <PrivateRoute exact path="/post/:id" component={Post}/>
        </Switch>
      </div>
    )
  }
}

export default App
