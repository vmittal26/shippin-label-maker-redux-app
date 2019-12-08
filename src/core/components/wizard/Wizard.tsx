import React from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import WizardWrapper, { StepperStyled, ButtonContainerStyled } from "./WizardJss";
import WizardContextType from "../../../model/WizardContextType";

import isObjectEmpty from "../../utils/isObjectEmpty";

type WizardPropsType = {
  wizardContext: WizardContextType,
  steps: Array<string>,
  getStepContent: Function,
  validationSchema: any,
  onComplete:Function
}
/**
 * Wizard component responsible for handling wizard actions 
 * input as domain object to be updated by form 
 * contained and gives updated output post submit 
 * or completion of wizard
 * @param props
 */
const Wizard: React.FC<WizardPropsType> = (props: WizardPropsType) => {

  const { wizardContext, validationSchema, getStepContent, steps , onComplete} = props;
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = (props: any) => {

    let { setTouched, errors, submitForm } = props;
    if (activeStep === steps.length - 2) {
      setTouched();
      if (!isObjectEmpty(errors)) submitForm();
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);

  };

  const handleBack = (props: any) => {
    let { setTouched, errors, submitForm } = props;
    if (activeStep === steps.length - 1) {
      setTouched();
      if (!isObjectEmpty(errors)) submitForm();
    }
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <WizardWrapper>
      <Formik
        enableReinitialize
        initialValues={wizardContext}
        onSubmit={(wizardContext:WizardContextType) => {
          onComplete(wizardContext);
        }}
        validationSchema={validationSchema}
        children={(props: any) => (
          <Form>
            <StepperStyled activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </StepperStyled>
            <>
              {getStepContent(activeStep, props)}
              <ButtonContainerStyled>
                <Button variant="contained" disabled={activeStep === 0} onClick={() => handleBack(props)}>
                  Back
                </Button>
                <Button
                  className="NextButton"
                  size="large"
                  variant="contained"
                  color="primary"
                  style={activeStep === steps.length - 1 ? { display: "none" } : {}}
                  onClick={() => handleNext(props)}
                >
                  {activeStep === steps.length - 2 ? "Finish" : "Next"}
                </Button>

                <Button
                  size="large"
                  className="ConfirmButton"
                  disabled={!isObjectEmpty(props.errors)}
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={activeStep < steps.length - 1 ? { display: "none" } : { display: "block" }}
                >
                  Generate Shipping Label
                  </Button>
              </ButtonContainerStyled>

            </>
          </Form>)
        }
      />
    </WizardWrapper>
  );
}

export default Wizard;
