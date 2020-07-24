import React, {Component} from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import Posts from './components/Posts';
class App extends Component {
  render(){
    return(
      <Router>
        <ul>
          <li><Link to ="">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/posts">Posts</Link></li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts" exact>
            <Posts />
          </Route>
      
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
