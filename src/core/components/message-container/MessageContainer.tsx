import React from "react";
import MessageContainerStyled from "./MessageContainerJss";
import { TypographyStyled } from "../../utils/styled-components/TypographyStyled";


type ErrorMessageType = {
    message: string,
    textcolor:string,
    variant?:string,
    component?:string
}
const MessageContainer: React.FC<ErrorMessageType> = ({ message,textcolor ,variant="h6" ,component="h1"}:ErrorMessageType) => (
    <MessageContainerStyled>
        <TypographyStyled textcolor={textcolor} variant={variant} component={component}>
            {message}
        </TypographyStyled>
    </MessageContainerStyled>);
export default MessageContainer;