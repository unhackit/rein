import * as React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';

import '../Auth.css';

import { Button }from '../../../components/Button/Button';

import Github from '../../../assets/images/Github.png'
import LinkedIn from '../../../assets/images/linkedin.png';
import Google from '../../../assets/images/Google.png'


const Register = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar/>
                </div>
                <div className="col-md-12 col-lg-9 m-0 p-0">
                    <div className="bg-light pt-3 pb-4">
                        <div className="form-component-two mt-5 mb-5">
                            <div className="form-component-two-header pt-4 pl-4 pr-4 pb-2">
                                <div className="row">
                                    <div className="col-8 col-md-8">
                                        <h4 className="header-light">Sign Up</h4>
                                        <span className="span-primary"> Hello there, <br/> Sign up to ProDevs to get access to the best skilled creators and managers within your reach.</span>
                                    </div>
                                    <div className="col-4 col-md-4 text-right">
                                        <a className="anchor" href="/">New User?</a>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="pt-2 pl-4 pr-4 pb-2">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center form-width-center mt-3 mb-3">
                                        <input type="checkbox" className="mr-3"/>
                                        <label>By signing up, you voluntarily agree to ProDevs Terms of Service and Privacy Policy.</label>
                                    </div>
                                    <div className="form-width-center">
                                        <Button
                                            label="Register"
                                            styles="btn primary-button"
                                        />
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="pt-2 pb-5 pl-4 pr-4 form-width-center">
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
                </div>
            </div>
        </>
    )
}

export default Register;