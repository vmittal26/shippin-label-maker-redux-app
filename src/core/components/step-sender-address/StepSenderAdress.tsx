import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";

import PaperStyled from "../../utils/styled-components/PaperStyledJss";
import FormControlStyled from "../../utils/styled-components/FormControlStyledJss";

const StepSenderAdress: React.FC = (props: any) => {
  const { errors } = props;

  return (
    <PaperStyled>
      <Typography variant="h5">Enter The Sender's Address</Typography>
      <Grid container>
        <Grid item sm={5}>
          <FormControlStyled>
            <Field
              required
              error={errors.from && errors.from.name}
              name="from.name"
              label="Name"
              component={TextField}
            />
          </FormControlStyled>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <FormControlStyled>
              <Field
                required
                error={errors.from && errors.from.street}
                name="from.street"
                label="Street"
                component={TextField}
              />
            </FormControlStyled>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={ errors.from && errors.from.state}
                  name="from.state"
                  label="State"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={errors.from && errors.from.city}
                  name="from.city"
                  label="City"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={ errors.from && errors.from.zip}
                  name="from.zip"
                  label="Zip"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperStyled>
  );
};

export default StepSenderAdress;
