import React, { useContext } from 'react';
import Header from './core/components/header/Header';
import MainWrapper from './AppJss';
import { StylesProvider, createMuiTheme } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import Login from './features/login/Login';
import AuthContext from './context/AuthContext';
import withAuthentication from './hoc/withAuthentication';
import Spinner from './core/components/spinner/Spinner';

const ShippingLabelMaker = React.lazy(() => import("./features/shipping-label-maker/ShippingLabelMaker"));
const ShippingLabel = React.lazy(() => import("./core/components/shipping-label/ShippingLabel"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039be5',
    }
  },
});


const App: React.FC = () => {

  const authContext = useContext(AuthContext);
  
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Header />
        <MainWrapper >
          <React.Suspense fallback={<Spinner/>}>
            <Switch>
              <AuthContext.Provider value={authContext}>
                <Route exact path="/" component={Login} />
                <Route exact path="/shippingLabelMaker" component={withAuthentication(ShippingLabelMaker)} />
                <Route exact path="/shippingLabel" component={withAuthentication(ShippingLabel)} />
              </AuthContext.Provider>
            </Switch>
          </React.Suspense>
        </MainWrapper>
      </StylesProvider>
    </ThemeProvider>

  );
}

export default App;
