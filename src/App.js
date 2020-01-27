import React, { Suspense } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './components/Routes'

const Login = React.lazy(() => import('./pages/Login/Index.js'))
const Layout = React.lazy(() => import('./components/Layout/Index.js'))

const App = () => (
   <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute component={Layout} />
         </Switch>
      </Suspense>
   </HashRouter>
)
export default App
