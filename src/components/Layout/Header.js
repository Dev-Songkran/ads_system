import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout
export default () => {
   return (
      <Header className="px-3 bg-white">
         <Link to="/app">ระบบออกใบเสร็จ เว็บไชต์เชียงรายโฟกัสดอทคอม</Link>
      </Header>
   )
}
