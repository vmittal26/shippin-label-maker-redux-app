import styled, { StyledComponent } from "styled-components";
export const FlexBarStyled: StyledComponent<any, any> = styled.div`
    background-color:${({ bgcolor = "rgb(51,51,51)" }: any) => bgcolor};
    width:100%;
    padding:${(props: any) => props.padding};
    display:flex;
    justify-content:space-between;
    
`;
