import React from 'react';
import PaperStyled from '../../utils/styled-components/PaperStyledJss';
import { Typography, Grid, MenuItem } from '@material-ui/core';
import FormControlStyled from '../../utils/styled-components/FormControlStyledJss';
import { Field } from 'formik';
import {  TextField } from 'formik-material-ui';
import ShippingOption from '../../../constants/ShippingOption';

const getShippingOptions = (shippingOption:any)=>{
    
   return Object.keys(shippingOption).map((key)=>{
        return {
            value:shippingOption[key],
            label:key
        }
    });
}

const StepGetShippingOption: React.FC = (props: any) => {

    return (
        <PaperStyled>
            <Typography variant="h5">Select Shipping Option</Typography>
            <Grid container>
                <Grid item sm={5}>
                    <FormControlStyled>
                        <Field
                            name="shippingOption"
                            label="Select Shipping Option"
                            select
                            variant="standard"
                            margin="normal"
                            component={TextField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                            {getShippingOptions(ShippingOption).map((option:any) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Field>
                    </FormControlStyled>
                </Grid>
            </Grid>
        </PaperStyled >
    )

}

export default StepGetShippingOption