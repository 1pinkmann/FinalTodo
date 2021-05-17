import React from 'react'
import { Select, TextField, MenuItem } from '@material-ui/core';
import { useFormikContext } from 'formik';

export default function CustomTextField(props) {
    let {values, handleChange, handleBlur, touched, errors} = useFormikContext();
    let { name } = props;
    let { as } = props;

    if (as === 'input') {
        return (
            <TextField
                {...props}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[name] && !!errors[name]}
                helperText={touched[name] && errors[name]}
            />
        );
    } else if (as === 'select') {
        return (
            <Select {...props} value={values[name]} onChange={handleChange} onBlur={handleBlur} >
                <MenuItem value={true}>Done</MenuItem>
                <MenuItem value={false}>Not done</MenuItem>
            </Select>
        );
    }
}
