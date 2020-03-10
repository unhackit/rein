import React from 'react'

const BasicInformation = () => {
    return (
        <>
            <div className="basic-information">
                <div className="header">
                    <h3>Basic Information</h3>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="image-placeholder">
                            
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6 col-12">
                        <p>Profile Headshot</p>
                        <span className="span-info">Minimum Recommended Size (500x500 px)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicInformation;
