import React from 'react'
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    display:flex;
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:3;
    background:rgba(255,255,255,0.5);
    bottom:0;
    justify-content:center;
    align-items:center;
`

export default function Spinner() {
    return (
        <SpinnerContainer>
            <CircularProgress disableShrink />
        </SpinnerContainer>
    )
}
