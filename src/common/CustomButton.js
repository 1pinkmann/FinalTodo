import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik';
import React from 'react'

export default function CustomButton({children, ...props}) {
    let { isValid } = useFormikContext();

    return (
        <Button {...props} disabled={!isValid}>{children}</Button>
    )
}
