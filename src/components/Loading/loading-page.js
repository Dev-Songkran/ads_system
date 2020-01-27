import React from 'react'
import { Spin, Icon } from 'antd'

const LoadingPage = () => (
   <Spin
      spinning={true}
      indicator={<Icon className="text-primary" type="loading" spin />}
      size="large"
      style={{ maxHeight: '100%' }}
      tip="เชียงรายโฟกัส . ."
      className="text-primary h4"
   >
      <div style={{ minHeight: '100vh' }}></div>
   </Spin>
)

export default LoadingPage
