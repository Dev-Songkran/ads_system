import React from 'react'
import auth from '../../utils/auth'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'

const Login = props => {
   const { getFieldDecorator } = props.form

   const handleLogin = e => {
      e.preventDefault()
      props.form.validateFields((err, values) => {
         if (!err) {
            auth
               .login(values)
               .then(res => {
                  console.log(res)
                  props.history.push('/')
               })
               .catch(err => {
                  message.error(err.response.data.message)
               })
         }
      })
   }
   return (
      <div>
         <section className="bg-white">
            <div className="container">
               <div
                  style={{ minHeight: '100vh' }}
                  className="row align-items-center justify-content-center"
               >
                  <div className="col-lg-4 col-sm-8">
                     <div className="card border-0 text-black">
                        <div className="card-header text-center border-0 bg-white">
                           <h4 className="text-dark">
                              ระบบโฆษณา <br />
                              <span className="text-orange font-weight-normal">
                                 เว็บไซต์เชียงรายโฟกัส
                              </span>
                           </h4>
                        </div>
                        <div className="card-body">
                           <Form className="login-form" onSubmit={handleLogin}>
                              <Form.Item>
                                 {getFieldDecorator('username', {
                                    rules: [
                                       {
                                          required: true,
                                          message: 'กรุณากรอกชื่อผู้ใช้งาน!',
                                       },
                                    ],
                                 })(
                                    <Input
                                       size="large"
                                       prefix={
                                          <Icon
                                             type="user"
                                             style={{
                                                color: 'rgba(0,0,0,.25)',
                                             }}
                                          />
                                       }
                                       placeholder="Username"
                                    />
                                 )}
                              </Form.Item>
                              <Form.Item>
                                 {getFieldDecorator('password', {
                                    rules: [
                                       {
                                          required: true,
                                          message: 'กรุณากรอกรหัสผ่าน',
                                       },
                                    ],
                                 })(
                                    <Input
                                       prefix={
                                          <Icon
                                             type="lock"
                                             style={{
                                                color: 'rgba(0,0,0,.25)',
                                             }}
                                          />
                                       }
                                       size="large"
                                       type="password"
                                       placeholder="Password"
                                    />
                                 )}
                              </Form.Item>
                              <Form.Item className="mb-2">
                                 {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                 })(<Checkbox>จำฉันไว้ในระบบ</Checkbox>)}
                              </Form.Item>
                              <div>
                                 <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    className="d-block w-100 btn btn-primary"
                                 >
                                    เข้าสู่ระบบ
                                 </Button>
                              </div>
                           </Form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

const LoginForm = Form.create({ name: 'normal_login' })(Login)
export default LoginForm
