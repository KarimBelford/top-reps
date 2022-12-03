import React from "react";
import './Button.scss'

const ButtonTypeClass = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className= {`button-container ${ButtonTypeClass[buttonType]}`} {...otherProps}> {children}</button>
    )
}

export default Button;