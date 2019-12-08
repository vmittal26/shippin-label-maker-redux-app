import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Redirect } from "react-router";

const withAuthentication = (Component:any) => (props:any) =>{
    const  { isAuthenticated} = useContext(AuthContext);

    return (isAuthenticated ? <Component {...props}/>:<Redirect to="/"/>)
}

export default withAuthentication;