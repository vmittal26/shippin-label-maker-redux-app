import styled from "styled-components";
import { Card } from "@material-ui/core";

export const LoginFormContainerStyled = styled(Card)`
   display:flex;
   position: absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%); 
   padding:4em 2em;
   flex-direction:column;
   width:40%;

   button{
       margin:2em 0;
       width:100%;
   }
`;
