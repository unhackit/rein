import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';

import '../Auth.css';

import { Button }from '../../../components/Button/Button';

import Github from '../../../assets/images/Github.png'
import LinkedIn from '../../../assets/images/linkedin.png';
import Google from '../../../assets/images/Google.png'

const Login = () => (
    <>
        <Navbar 
            bg='nav-primary'
            menu={false}
        />
        <div className="bg-light pt-3 pb-4">
            <div className="form-component-one mt-5 mb-5">
                <div className="form-component-one-header pt-4 pl-4 pr-4 pb-2">
                    <div className="row">
                        <div className="col-8 col-md-8">
                            <h4 className="header-light">Sign In</h4>
                            <span className="span-primary">Welcome Back</span>
                        </div>
                        <div className="col-4 col-md-4 text-right">
                            <a className="anchor" href="/">New User?</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="pt-2 pl-4 pr-4 pb-2">
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <a className="anchor" href="/">Forgot Password?</a>
                            </div>
                        </div>
                        <Button
                            label="Login"
                            styles="btn primary-button"
                        />
                    </form>
                </div>
                <div className="pt-2 pb-5 pl-4 pr-4">
                    <p className="horizontal-lined-text"><span>Or sign in with</span></p>
                    <div className="row social-icons pl-3 pr-3">
                        <div className="icon-box">
                            <img src={Google} alt="google"/>
                        </div>
                        <div className="icon-box">
                            <img src={Github} alt="github"/>
                        </div>
                        <div className="icon-box">
                            <img src={LinkedIn} alt="linkedin"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Login;