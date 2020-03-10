import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';

import '../Auth.css';

import { Button }from '../../../components/Button/Button';


const ResetPassword = () => (
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
                            <h4 className="header-light">Reset Password</h4>
                            <span className="span-primary"> Your password has been reset. Enter a new sign in password for your account.</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="pt-2 pl-4 pr-4 pb-2">
                    <form>
                        <div className="form-group">
                            <label >New Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <label >Confirm New Password </label>
                            <input type="password" className="form-control" />
                        </div>
                        
                        <Button
                            label="Reset Password"
                            styles="btn primary-button mt-4 mb-5"
                        />
                    </form>
                </div>
            </div>
        </div>
    </>
)

export default ResetPassword;