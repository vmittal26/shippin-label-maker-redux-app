import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import PaperStyled from "../../utils/styled-components/PaperStyledJss";
import FormControlStyled from "../../utils/styled-components/FormControlStyledJss";

const StepReceiverAddress: React.FC = (props: any) => {
  const { errors } = props;
  return (
    <PaperStyled>
      <Typography variant="h5">Enter The Receiver's Address</Typography>
      <Grid container>
        <Grid item sm={5}>
          <FormControlStyled>
            <Field
              required
              error={errors.to && errors.to.name}
              name="to.name"
              label="Name"
              type="text"
              component={TextField}
            />
          </FormControlStyled>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <FormControlStyled>
              <Field
                required
                error={errors.to && errors.to.street}
                name="to.street"
                label="Street"
                type="text"
                component={TextField}
              />
            </FormControlStyled>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={errors.to && errors.to.state}
                  name="to.state"
                  label="State"
                  type="text"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={errors.to && errors.to.city}
                  name="to.city"
                  label="City"
                  type="text"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
            <Grid item sm={4}>
              <FormControlStyled>
                <Field
                  required
                  error={errors.to && errors.to.zip}
                  name="to.zip"
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

export default StepReceiverAddress;
