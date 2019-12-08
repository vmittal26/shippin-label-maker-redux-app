import styled, { StyledComponent } from "styled-components";

const ShippingLabelStyled = styled.div`
    border:1px solid #ccc;
    height:100%;
    font-size:0.8rem;
    padding:0;
`;

export const ShippingLabelHeaderStyled = styled.div`
    display:flex;
    width:100%;
    padding:1em 4em;
    padding-bottom:0em;
    justify-content:space-between;

    img{
        width:4rem;
        height:4rem;
    }
    
`

export const ShippingLabelMainStyled = styled.div`
    padding:1em 4em ;

`

export const ShippingClientInfoContainerStyled = styled.div`
    margin:2em 0;
    display:flex;
    width:50%;
`

export const ShippingClientInfoStyledBox = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:50%;

    .heading-1{
        font-weight:300;
        padding-bottom:0.8em;
    }
`
export const ShippingRateDescriptionStyled = styled.div`
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    flex-direction:column;

`

export const ShippingDescriptionHeaderRightStyled = styled.div`
  display:flex;
  justify-content:space-between;
  flex-basis:35%;
`

export const ShippingRateContainerStyled:StyledComponent<any, any> = styled.div`
  padding:1.5em;
  background-color:${({bgcolor="#fff"}: any) => bgcolor};
  display:flex;
  justify-content:space-between;
  width:${({width="21%"}: any) => width};
  margin-left:auto
`


export default ShippingLabelStyled;