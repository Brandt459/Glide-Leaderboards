import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Submitrecord from './pages/submitrecord'
import Worldrecords from './pages/worldrecords'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './css/index.css'

const loggedIn = localStorage.getItem('token') ? true : false

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register}>
          {loggedIn && <Redirect to="/" />}
        </Route>
        <Route exact path="/login" component={Login}>
          {loggedIn && <Redirect to="/" />}
        </Route>
        <Route exact path="/submit-record" component={Submitrecord}>
          {!loggedIn && <Redirect to="/" />}
        </Route>
        <Route exact path="/world-records" component={Worldrecords} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
