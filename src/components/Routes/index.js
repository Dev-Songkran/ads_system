import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../../utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
   return (
      <Route
         {...rest}
         render={props => {
            if (auth.isAuthenticated()) {
               return <Component {...props} />
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: '/login',
                        state: {
                           from: props.location,
                        },
                     }}
                  />
               )
            }
         }}
      />
   )
}
const PublicRoute = ({ component: Component, ...rest }) => {
   return (
      <Route
         {...rest}
         render={props => {
            if (auth.isAuthenticated()) {
               console.log(auth.isAuthenticated())
               return (
                  <Redirect
                     to={{
                        pathname: '/',
                     }}
                  />
               )
            } else {
               return <Component {...props} />
            }
         }}
      />
   )
}
export { PrivateRoute, PublicRoute }
