import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./ButtonStyles";

export const ButtonTypeClass = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = ButtonTypeClass.base) => (
    {
        [ButtonTypeClass.base]: BaseButton,
        [ButtonTypeClass.google]: GoogleSignInButton,
        [ButtonTypeClass.inverted]: InvertedButton
    }[buttonType]);

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton{...otherProps}> {children}</CustomButton>
    )
}

export default Button;