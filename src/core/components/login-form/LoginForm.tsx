import React from "react";
import { Formik, Field, Form } from "formik";
import FormControlStyled from "../../utils/styled-components/FormControlStyledJss";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";


/**
 * LoginForm Component
 */
export default (props: any) => {

    const { onSubmit } = props;
    return (

        <Formik
            // enableReinitialize
            initialValues={{ userName: "", password: "" }}
            validationSchema={Yup.object().shape({
                userName: Yup.string().required(`Please Enter User Name`),
                password: Yup.string().required(`Please Enter Password`)
            })}
            onSubmit={onSubmit}
            children={({ errors, isSubmitting }: any) => (
                <Form>
                    <FormControlStyled>
                        <Field
                            required
                            error={errors.userName && errors.userName}
                            name="userName"
                            label="Name"
                            type="text"
                            component={TextField}
                        />
                    </FormControlStyled>
                    <FormControlStyled>
                        <Field
                            required
                            error={errors.password && errors.password}
                            name="password"
                            label="Password"
                            type="password"
                            component={TextField}
                        />
                    </FormControlStyled>
                    <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">{isSubmitting ? "Logging..." : "Login"}</Button>
                </Form>
            )} />
    )
};