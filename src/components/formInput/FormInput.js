import React from "react";
import { Input, FormInputLabel, Group } from "./FormInputStyles";

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps}/>
            { label && (
                <FormInputLabel shrink= {otherProps.value.length}>                
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;