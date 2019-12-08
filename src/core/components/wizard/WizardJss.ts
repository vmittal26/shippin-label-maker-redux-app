import styled from "styled-components";
import { Stepper } from "@material-ui/core";

const WizardWrapper = styled.div`
  
`

export const StepperStyled = styled(Stepper)`
    padding:1rem;
`

export const  ButtonContainerStyled = styled.div`
 display:flex;
 margin:1rem;
 justify-content:center;

 .NextButton{
     margin-left:0.5rem;
 }
 .ConfirmButton{
     margin-left:0.5rem;
 }
 
`



export default WizardWrapper;