import React, { useState } from 'react'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'

import menuList from './menu.json'

export default withRouter(props => {
   const { location } = props

   const getName = url => {
      let title
      menuList.map(items => {
         if (url === items.pathname) {
            title = items.name
         }
         if (items.childrens) {
            items.childrens.map(item => {
               if (url === item.pathname) {
                  title = item.name
               }
            })
         }
      })
      return title
   }
   const pathSnippets = location.pathname.split('/').filter(i => i)
   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
         <Breadcrumb.Item key={url}>
            <Link to={url}>{getName(url)}</Link>
         </Breadcrumb.Item>
      )
   })
   const breadcrumbItems = [
      <Breadcrumb.Item key="home">
         <Link to="/">แดชบอร์ด</Link>
      </Breadcrumb.Item>,
   ].concat(extraBreadcrumbItems)
   return (
      <>
         <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </>
   )
})
