import React, { useContext, useState } from "react";
import LoginWrapperStyled from "./LoginJss";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../core/components/login-form/LoginForm";
import { LoginFormContainerStyled } from "../../core/components/login-form/LoginFormContainerStyled";
import MessageContainer from "../../core/components/message-container/MessageContainer";

const Login: React.FC = (props: any) => {

    const { history } = props;

    const authContext = useContext(AuthContext);

    const [isAuthenticated, setIsAuthenticated] = useState(true);


    const onLogin = ({ userName, password }: any, actions: any) => {
        setIsAuthenticated(true);

        setTimeout(() => {
            if (userName === "admin" && password === "admin") {
                setIsAuthenticated(true);
                authContext.isAuthenticated = true;
                history.push("/shippingLabelMaker");
            } else {
                setIsAuthenticated(false);
                authContext.isAuthenticated = false;
            }
            actions.setSubmitting(false);

        }, 1000);
    }

    let login = (
        <LoginWrapperStyled>
            <LoginFormContainerStyled >
                <LoginForm onSubmit={onLogin} />
                {!isAuthenticated && <MessageContainer textcolor="red" message="User name or password is incorrect" variant="subtitle1" />}
            </LoginFormContainerStyled>

        </LoginWrapperStyled>)

    return login;
}

export default Login;