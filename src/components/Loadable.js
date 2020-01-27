import React from 'react'
import L from 'react-loadable'
import { Skeleton } from 'antd'

const Loading = () => (
   <div className="p-4">
      <Skeleton active loading={true} />
   </div>
)
const Loadable = props =>
   L({
      loading: Loading,
      ...props,
   })
export default Loadable
