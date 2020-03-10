import React, {useState} from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'; 
import Role from '../../components/Onboarding/Role/Role'
import FormSidebar from '../../components/FormSidebar/FormSidebar';
import BasicInformation from '../../components/Onboarding/BasicInformation/BasicInformation';



function Onboarding() {
    const [step] = useState(2)

    const SwitchForms = () => {
        switch(step){
            case 1:
                return <Role/>
            case 2:
                return <BasicInformation/>
            default:
                return <Role/>
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-3 m-0 p-0">
                    {step === 1 ? <Sidebar/> : <FormSidebar/>}
                </div>
                <div className="col-md-12 col-lg-9 m-0 p-0 bg-light">
                    { SwitchForms() }
                </div>
            </div>
        </>
    )
}

export default Onboarding
