import * as React from 'react';
import './FormSidebar.css';


import { formStepsData as x } from '../../utils';

const FormSidebar = () => {
    return (
        <div className={`sidebar secondary-sidebar`}>
            <div className="form-steps">
                <ul>
                    {
                        x.map((item, i) => (
                            <div key={i}>
                                <p className="form-step-title mb-2 mt-4" key={i}><span className="item-number">{i + 1}</span>{item.title}</p>
                                <div className="form-details-wrapper">
                                    {
                                        item.children.map((item,i ) => {
                                            return <span className="form-step-detail" key={i}>{item}</span>
                                        })
                                    }
                                </div>
                            </div>
                                
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FormSidebar
