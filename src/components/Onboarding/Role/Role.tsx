import React from 'react'

import '../Onboarding.css';

let x = [1,2,3,4,5];

const Role = () => {
    return (
        <>
            <div className="role-component">
                <div className="header">
                    <h3>Choose Role</h3>
                    <span>We’ll need some essential information to create a profile for you. Ensure <br/>the information you provide is accurate and verifiable</span>
                </div>  
                <hr/>
                <div className="role-grid">
                    <div className="row">
                        {
                            x.map((item) => {
                                return (
                                    <div className="col-md-6 mb-4" key={item}>
                                        <div className={`role-box role-box-${item}`}>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <p>Designer</p>
                                                    <span>UX Designer, UI Designer, Graphics Designer, 3D Designer, Illustrator, ...</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <p className={`colored-sq colored-sq-${item}`}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Role
