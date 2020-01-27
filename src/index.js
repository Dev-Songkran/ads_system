import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import 'antd/dist/antd.css'
import './sass/app.scss'

axios.defaults.baseURL =
   process.env.NODE_ENV !== 'production'
      ? 'https://ads_system.localhost/api/'
      : '/api/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

ReactDOM.render(<App />, document.getElementById('root'))
