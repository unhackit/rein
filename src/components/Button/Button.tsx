import React from 'react';
import './Button.css';


interface Button {
    label: string,
    styles?: string

}

export const Button = (props : Button) => {
    const {label, styles} = props

    return(
        <button
            className={styles}
        >
            {label}
        </button>
    )
}
