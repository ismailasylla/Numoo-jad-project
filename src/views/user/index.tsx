import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppLayout } from '../../layout';

const LoginPage = lazy(() => import('./Login/LoginPage'));
const SignupPage = lazy(() => import('./Signup/SignupPage'));

interface Props {
  match: any;
}

const User: FC<Props> = ({ match }) => {
  return (
    <AppLayout>
      <Suspense fallback={<div className='loading' />}>
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}/login`} />
          <Route path={`${match.url}/login`} render={props => <LoginPage {...props} />} />
          <Route path={`${match.url}/signup`} render={props => <SignupPage {...props} />} />
        </Switch>
      </Suspense>
    </AppLayout>
  )
}

export default User;