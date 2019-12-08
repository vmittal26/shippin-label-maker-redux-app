import React from 'react'
import HeaderWrapper from './HeaderJss';
import ShippingMaker from "../../../assets/images/shippinglabel-maker.svg"
import { TypographyStyled } from '../../utils/styled-components/TypographyStyled';
import { Link } from 'react-router-dom';

/**
 * Header Component
 */
const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/"> <img src={ShippingMaker} alt="Shipping Service" /></Link>
      <Link className="home" to="/shippingLabelMaker">  
        <TypographyStyled data-heading="header-heading" marginleft="1em" textcolor="white" variant="subtitle2" component="h1">Shipping Label Maker</TypographyStyled>
      </Link>
    </HeaderWrapper>
  )
}

export default Header;
