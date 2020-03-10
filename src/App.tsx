import React from 'react';
import './App.css';

import { Route} from 'react-router-dom';
import Login from './containers/Authentication/Login/Login';
import ForgotPassword from './containers/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/Authentication/ResetPassword/ResetPassword';
import Register from './containers/Authentication/Register/Register';
import Onboarding from './containers/Onboarding/Onboarding';
import Landing from './containers/Landing/Landing';



const App = () => {
  return (
    <>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/forgotpassword" component={ForgotPassword}/>
      <Route exact path="/resetpassword" component={ResetPassword}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/onboarding" component={Onboarding}/>
    </>
  )
}

export default App;
