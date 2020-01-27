import React from 'react'
import Loadable from 'react-loadable'
import { withRouter, Route, Switch, Link } from 'react-router-dom'
import LoadingPage from '../Loading/loading-page'
import { Layout, Icon } from 'antd'
import Sidebar from './Menu'
const { Header, Content, Footer, Sider } = Layout
const Customer = Loadable({
   loader: () =>
      import(/* webpackChunkName: "customer" */ '../../pages/Customer'),
   loading: LoadingPage,
})

const Dashboard = () => <div>Dashboard</div>
const ErrorPage = () => <div>ERROR</div>

const LayoutWrapper = props => (
   <Layout style={{ minHeight: '100vh' }}>
      <Sidebar {...props} />
      <Layout>
         <Header className="px-3 bg-white">
            <Link to="/app">ระบบออกใบเสร็จ เว็บไชต์เชียงรายโฟกัสดอทคอม</Link>
         </Header>
         <Content>
            <Switch>
               <Route exact path="/" component={Dashboard} />
               <Route path="/customer" key="customer" component={Customer} />
               <Route component={ErrorPage} />
            </Switch>
         </Content>
      </Layout>
   </Layout>
)
export default LayoutWrapper
