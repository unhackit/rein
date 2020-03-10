import React from 'react';

import './Landing.css';
import LogoPrimary from '../../assets/images/logoPrimary.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';

const Landing = () => {
    return (
        <div className="landing-page">
            <div className="row">
                <div className="col-md-12 col-lg-6 landing-left">
                    <div className="custom-container">
                        <header className="mt-4">
                            <div className="d-flex justify-content-between">
                                <img src={LogoPrimary} alt="logo"/>
                                <a className="anchor mt-3" href="https://prodevs.io">View Old Site</a>
                            </div>
                        </header>
                        <div className="content">
                            <h2>Coming Soon</h2>
                            <p className="mt-4 description">A solution to the hiring problem companies face when seeking out technical talents in Africa</p>
                        </div>
                        <div className="subscription-form mt-5">
                            <form>
                                <label>Enter your email address to get notified when we launch</label>
                                <div>
                                    <input type="text" className="" placeholder="myemail@email.com"/>
                                    <button className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="social-icons">
                            <img src={Facebook} alt="facebook"/>
                            <img src={Twitter} alt="facebook"/>
                            <img src={LinkedIn} alt="facebook"/>
                        </div>
                        <div className="copyright">
                            <span>Copyright © 2020 ProDevs.io. All Rights Reserved.</span>
                        </div>  
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 landing-right">
                    <div className="content">
                        
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Landing;