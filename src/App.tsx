import React, { lazy, Suspense, useContext } from "react";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useAuth } from "./context/AuthContext";

const ViewMain = lazy(() => import("./views"));
const ViewApp = lazy(() => import("./views/app"));
const ViewUser = lazy(() => import("./views/user"));

import { I18nProvider } from "./i18n";

function App(): JSX.Element {
  const { state } = useContext(AppContext);
  const { currentUser, isCreated } = useAuth();
  
  const AuthRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser && isCreated ? (
            <Redirect
              to={{
                pathname: "/app/coaches",
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };

  return (
    <I18nProvider locale={state.siteLang}>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <AuthRoute path="/user" component={ViewUser} />
            <Route path="/app" render={(props) => <ViewApp {...props} />} />
            <Route path="/" exact render={(props) => <ViewMain {...props} />} />
          </Switch>
        </Router>
      </Suspense>
    </I18nProvider>
  );
}

export default App;
