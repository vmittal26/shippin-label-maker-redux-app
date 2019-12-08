import React from "react";
import ShippingLabelStyled, { ShippingLabelHeaderStyled, ShippingLabelMainStyled, ShippingClientInfoContainerStyled, ShippingClientInfoStyledBox, ShippingRateDescriptionStyled, ShippingDescriptionHeaderRightStyled, ShippingRateContainerStyled } from "./ShippingLabelJss";
import { TypographyStyled } from "../../utils/styled-components/TypographyStyled";
import { FlexBarStyled } from "../../utils/styled-components/FlexBarStyled";
import { Typography, Box, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ShippingOptionMap } from "../../../constants/ShippingOption";
import getShippingCost from "../../utils/getShippingCost";
import Barcode from "../../../assets/images/barcode-product.svg";
import { Redirect } from "react-router-dom";


const theme = createMuiTheme({
    typography: {
        fontSize: 12,
    },
});
const ShippingLabel: React.FC = (props: any) => {

    const { location: { state } } = props;

    let shippingLabel = null;
    if (!state) {
        shippingLabel = <Redirect to="/" />
    } else {

        const { location: { state: { wizardContext } } } = props;
        shippingLabel = (
            <ShippingLabelStyled>
                <ThemeProvider theme={theme}>
                    <FlexBarStyled padding="0.7rem"></FlexBarStyled>
                    <ShippingLabelHeaderStyled>
                        <Typography variant="h4" component="h1">Shipping Label</Typography>
                        <img src={Barcode} alt="BarCode" />
                    </ShippingLabelHeaderStyled>
                    <ShippingLabelMainStyled>
                        <ShippingClientInfoContainerStyled>
                            <ShippingClientInfoStyledBox>
                                <Typography className="heading-1" variant="h6">FROM </Typography>
                                <Typography variant="h6">{wizardContext.from.name}</Typography>
                                <Typography variant="subtitle1"> {wizardContext.from.street}</Typography>
                                <Box display="flex" className="heading-2">
                                    <Typography variant="subtitle1">{`${wizardContext.from.city} , ${wizardContext.from.zip}`}</Typography>
                                </Box>
                                <Typography variant="h6">{wizardContext.from.state}</Typography>
                            </ShippingClientInfoStyledBox>
                            <ShippingClientInfoStyledBox>
                                <Typography className="heading-1" variant="h6">TO </Typography>
                                <Typography variant="h6">{wizardContext.to.name}</Typography>
                                <Typography variant="subtitle1"> {wizardContext.to.street}</Typography>
                                <Box display="flex" className="heading-2">
                                    <Typography variant="subtitle1">{`${wizardContext.to.city} , ${wizardContext.to.zip}`}</Typography>
                                </Box>
                                <Typography variant="h6">{wizardContext.to.state}</Typography>
                            </ShippingClientInfoStyledBox>
                        </ShippingClientInfoContainerStyled>
                        <ShippingRateDescriptionStyled>
                            <FlexBarStyled padding="0.8rem">
                                <TypographyStyled textcolor="white" variant="subtitle1">Description</TypographyStyled>
                                <ShippingDescriptionHeaderRightStyled>
                                    <TypographyStyled textcolor="white" variant="subtitle1">RATE (PER KG)</TypographyStyled>
                                    <TypographyStyled textcolor="white" variant="subtitle1">WEIGHT</TypographyStyled>
                                    <TypographyStyled textcolor="white" variant="subtitle1">SHIPPING OPTION</TypographyStyled>
                                    <TypographyStyled textcolor="white" variant="subtitle1">AMOUNT</TypographyStyled>
                                </ShippingDescriptionHeaderRightStyled>
                            </FlexBarStyled>
                            <FlexBarStyled bgcolor={"#efefef"}>
                                <ShippingRateContainerStyled width="35%" bgcolor="#efefef">
                                    <Typography variant="subtitle1">₹0.40</Typography>
                                    <TypographyStyled marginleft="-1em" variant="subtitle1">{`${wizardContext.weight}kg`}</TypographyStyled>
                                    <Typography variant="subtitle1">{ShippingOptionMap.getShippingOptionMap().get(wizardContext.shippingOption)}</Typography>
                                    <Typography variant="subtitle1"></Typography>
                                </ShippingRateContainerStyled>
                            </FlexBarStyled>
                            <ShippingRateContainerStyled width="15.5%">
                                <Typography variant="subtitle1">Tax (0%)</Typography>
                                <Typography variant="subtitle1">₹0.00</Typography>
                            </ShippingRateContainerStyled>
                            <ShippingRateContainerStyled width="58%">
                                <Typography variant="button"><strong>TOTAL COST : RATE * WEIGHT * SHIPPING OPTION COST ( GROUND = 1 , PRIORITY = 1.15 )</strong></Typography>
                                <Typography variant="subtitle1">{`₹${getShippingCost(wizardContext.weight, 0.40, ShippingOptionMap.getShippingOptionMap().get(wizardContext.shippingOption))}`}</Typography>
                            </ShippingRateContainerStyled>
                        </ShippingRateDescriptionStyled>
                    </ShippingLabelMainStyled>
                </ThemeProvider>
            </ShippingLabelStyled>)
    }

    return shippingLabel;
}

export default ShippingLabel;