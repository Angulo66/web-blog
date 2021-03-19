import './App.css';
import React from 'react'
import Layout from './components/Layout';
import Blog from './containers/Blog/Blog';
import Home from './containers/Home/Home'
import Editor from './components/Editor/Editor'
import BlogDetail from './containers/BlogDetail/BlogDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/blog/detail/:blogId' component={BlogDetail}/>
        <Route exact path='/editor' component={Editor}/>
      </Switch>
    </Layout>
  );
}

export default App;
