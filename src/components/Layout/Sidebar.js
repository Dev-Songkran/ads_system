import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import auth from '../../utils/auth'

const { Sider } = Layout
const Sidebar = props => {
   const handleLogout = () => {
      auth.logout(() => {
         props.history.push('/login')
      })
   }
   return (
      <Sider className="p-2" width={250}>
         <Menu theme="dark" mode="inline" defaultSelectedKeys="dashboard">
            <Menu.Item className="rounded-lg h-auto" key="dashboard">
               <Link to="/">
                  <Icon className="align-middle" type="dashboard" />
                  <span className="align-middle">แดชบอร์ด</span>
               </Link>
            </Menu.Item>
            <Menu.Item className="rounded-lg h-auto" key="customer">
               <Link to="/customer">
                  <Icon className="align-middle" type="user" />
                  <span className="align-middle">ข้อมูลลูกค้า</span>
               </Link>
            </Menu.Item>
            <Menu.Item
               className="rounded-lg h-auto"
               key="logout"
               onClick={handleLogout}
            >
               <Icon className="align-middle" type="logout" />
               <span className="align-middle">ออกจากระบบ</span>
            </Menu.Item>
         </Menu>
      </Sider>
   )
}
export default Sidebar
