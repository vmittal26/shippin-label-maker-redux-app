import React from 'react';
import PaperStyled from '../../utils/styled-components/PaperStyledJss';
import { Typography, Grid } from '@material-ui/core';
import FormControlStyled from '../../utils/styled-components/FormControlStyledJss';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';


const StepGetWeight: React.FC = (props: any) => {

    const {errors , touched} = props;
    return (
        <PaperStyled>
            <Typography variant="h6">Enter Weight of Shipment</Typography>
            <Grid container>
                <Grid item sm={5}>
                    <FormControlStyled>
                        <Field
                            required
                            error={touched && touched.weight && errors && errors.weight}
                            name="weight"
                            label="Weight (KG)"
                            component={TextField}
                        />
                    </FormControlStyled>
                </Grid>
            </Grid>
        </PaperStyled>
    )

}

export default StepGetWeight