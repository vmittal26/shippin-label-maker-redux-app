
import React from 'react';
import PaperStyled from '../../utils/styled-components/PaperStyledJss';
import Spinner from '../spinner/Spinner';
import MessageContainer from '../message-container/MessageContainer';

type StepConfirmationType = {
  isFormValid: boolean
}

const StepConfirmation: React.FC<StepConfirmationType> = (props: StepConfirmationType) => {

  const [isValidating, setValidating] = React.useState<boolean>(true);
  const { isFormValid } = props;

  React.useEffect(() => {
    setTimeout(setValidating, 500, false);
  }, []);

  let stepConfirmation = <Spinner />;

  if (!isValidating) {
    stepConfirmation = (<PaperStyled>
      {isFormValid ?
        <MessageContainer textcolor="green" message="All steps are complete!" /> :
        <MessageContainer textcolor="red" message=" Some of the information is incomplete! , Please revist steps to enter missing information" />}
    </PaperStyled>)
  }

  return stepConfirmation;
}

export default StepConfirmation;
