import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { withRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Breadcrumb from './Breadcrumb'

const { Content } = Layout
const Customer = React.lazy(() => import('../../pages/Customer/Index.js'))
const Dashboard = React.lazy(() => import('../../pages/Dashboard/Index.js'))

const ErrorPage = () => <div>ERROR</div>

const LayoutWrapper = props => (
   <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
         <Header />
         <Content className="p-3">
            <Breadcrumb />
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/customer" component={Customer} />
                  <Route component={ErrorPage} />
               </Switch>
            </Suspense>
         </Content>
      </Layout>
   </Layout>
)
export default withRouter(LayoutWrapper)
