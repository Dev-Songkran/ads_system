import React from 'react'
import { Layout } from 'antd'
import { withRouter, Route, Switch, Link } from 'react-router-dom'
import Loadable from '../Loadable'
import Sidebar from './Sidebar'
import Header from './Header'
import Breadcrumb from './Breadcrumb'

const { Content } = Layout

const Customer = Loadable({
   loader: () =>
      import(/* webpackChunkName: "customer" */ '../../pages/Customer'),
})

const Dashboard = Loadable({
   loader: () =>
      import(/* webpackChunkName: "dashboard" */ '../../pages/Dashboard'),
})

const ErrorPage = () => <div>ERROR</div>

const LayoutWrapper = props => (
   <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
         <Header />
         <Content className="p-3">
            <Breadcrumb />
            <Switch>
               <Route exact path="/" component={Dashboard} />
               <Route exact path="/customer" component={Customer} />
               <Route component={ErrorPage} />
            </Switch>
         </Content>
      </Layout>
   </Layout>
)
export default withRouter(LayoutWrapper)
