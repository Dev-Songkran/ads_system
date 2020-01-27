import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './components/Routes'
import Loadable from 'react-loadable'
import LoadingPage from './components/Loading/loading-page'

const Login = Loadable({
   loader: () => import(/* webpackChunkName: "login" */ './pages/Login'),
   loading: LoadingPage,
})
const Layout = Loadable({
   loader: () => import(/* webpackChunkName: "layout" */ './components/Layout'),
   loading: LoadingPage,
})

const ErrorPage = () => <div>ERROR</div>

const App = () => (
   <HashRouter>
      <Switch>
         <PublicRoute path="/login" component={Login} />
         <PrivateRoute component={Layout} />
      </Switch>
   </HashRouter>
)
export default App
