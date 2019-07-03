import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './Styles/App.css';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard'

const MainLayout = (props) => {
  const { children } = props;
  return (<Layout>
    {children}
  </Layout>
  );
}

const RouterComp = () => {
  return (<Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>);
};


const App = () => {
  return (<BrowserRouter>
    <MainLayout>
      <RouterComp />
    </MainLayout>
  </BrowserRouter>
  );
}

export default App;
