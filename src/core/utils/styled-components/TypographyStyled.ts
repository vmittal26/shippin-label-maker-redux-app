import styled, { StyledComponent } from "styled-components";
import { Typography } from "@material-ui/core";
export const TypographyStyled: StyledComponent<any, any> = styled(Typography)`
   color:${(props: any) => props.textcolor};
   margin-left:${(props: any) => props.marginleft}
`;
