import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import auth from '../../utils/auth'
import menuList from './menu.json'

const { Sider } = Layout
const Sidebar = props => {
   const handleLogout = () => {
      auth.logout(() => {
         props.history.push('/login')
      })
   }
   return (
      <Sider className="p-2" width={250}>
         {console.log(props.location)}
         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[props.location.pathname]}
         >
            {menuList.map((item, key) => {
               return (
                  <Menu.Item className="rounded-lg h-auto" key={item.pathname}>
                     <Link to={{ pathname: item.pathname }}>
                        <Icon className="align-middle" type={item.icon} />
                        <span className="align-middle">{item.name}</span>
                     </Link>
                  </Menu.Item>
               )
            })}
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
export default withRouter(Sidebar)
