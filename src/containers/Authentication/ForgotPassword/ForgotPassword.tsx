import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';

import '../Auth.css';

import { Button }from '../../../components/Button/Button';


const ForgotPassword = () => (
    <>
        <Navbar 
            bg='nav-primary'
            menu={false}
        />
        <div className="bg-light pt-3 pb-4">
            <div className="form-component-one mt-5 mb-5">
                <div className="form-component-one-header pt-4 pl-4 pr-4 pb-2">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h4 className="header-light">Forgot Password</h4>
                            <span className="span-primary">Please enter your email address to reset your login details</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="pt-2 pl-4 pr-4 pb-2">
                    <form>
                        <div className="form-group mb-5">
                            <label >Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <a href="/" className="anchor">Remember Your Password?  Sign In</a>
                        <Button
                            label="Send Reset Instructions"
                            styles="btn primary-button mt-3 mb-5"
                        />
                    </form>
                </div>
            </div>
        </div>
    </>
)

export default ForgotPassword;