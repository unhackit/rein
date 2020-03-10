import * as React from 'react';
import './Sidebar.css';
import IllustrationPrimary from '../../assets/images/ills1.png'



const Sidebar = () => {
    return (
        <div className={`sidebar primary-sidebar`}>
            <div className="fixed-bottom">
                <img src={IllustrationPrimary} className="primary-illustration" alt="illustration" width="200px"/>
            </div>
        </div>
    )
}

export default Sidebar
