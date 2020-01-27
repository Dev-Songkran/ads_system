import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { List, Icon, Avatar } from 'antd'
const Customer = () => {
   const data = [
      {
         id: 1,
         name: 'songkran',
      },
      {
         id: 2,
         name: 'chiangraifocus',
      },
   ]
   const handleDelete = id => {
      console.log(id)
   }
   return (
      <div className="card border-0 shadow-sm mt-3">
         <div className="py-0">
            <List
               dataSource={data}
               header={
                  <div className="px-3">
                     <Link
                        className="btn btn-sm btn-primary"
                        to="/customer/create"
                     >
                        <Icon type="user-add" />
                        <span className="align-middle">เพิ่มลูกค้า</span>
                     </Link>
                  </div>
               }
               renderItem={item => (
                  <List.Item
                     className="px-3"
                     actions={[
                        <Link
                           to="/customer/1"
                           className="btn btn-inverse-warning btn-sm"
                           key="edit"
                        >
                           <Icon type="edit" />
                        </Link>,
                        <button
                           onClick={() => handleDelete(item.id)}
                           className="btn btn-inverse-danger btn-sm"
                           key="delete"
                        >
                           <Icon type="delete" />
                        </button>,
                     ]}
                  >
                     <List.Item.Meta
                        title={<a href="https://ant.design">{item.name}</a>}
                     />
                  </List.Item>
               )}
            />
         </div>
      </div>
   )
}
export default withRouter(Customer)
