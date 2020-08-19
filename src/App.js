import React from 'react';
import { Route, Switch, withRouter, Redirect,BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './Containers/Layout/Layout';
import ProductLists from './Containers/ProductLists/ProductLists';
import Details from './Components/Details/Details';
function App() {
  let routes = (
    <Switch>
      <Route path ="/" exact component={ProductLists} />
      <Route path ="/details" exact component={Details} />
      <Redirect to="/"></Redirect>
    </Switch>
  )
  return (
    <Layout>{routes}</Layout>
 
  
    );
}

export default App;
