import styled from "styled-components";

const HeaderWrapper = styled.div`
     background-color: #24292e;
     display: flex;
     position:fixed;
     width:100%;
     height: 2.5rem;
     align-items:center;
     z-index:1;
     padding:0.5em;

     img{
          width:2rem;
          cursor: pointer;
          height:2rem;
     }

     .home{
          text-decoration:none;
          color:white;
          font-family:inherit;
          font-size:1rem;
     }
`

export default HeaderWrapper;