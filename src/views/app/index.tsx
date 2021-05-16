import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppLayout } from '../../layout';

const HomePage = lazy(() => import('./Home/HomePage'));
const CoachesPage = lazy(() => import('./Coaches/CoachesPage'));
const FindCoach = lazy(() => import('./FindCoach/FindCoach'));
const CoachDetailPage = lazy(() => import('./CoachDetail/CoachDetailPage'));

interface Props {
  match: any;
}

const User: FC<Props> = ({ match }) => {
  return (
    <AppLayout>
      <Suspense fallback={<div className='loading' />}>
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}/home`} />
          <Route path={`${match.url}/home`} render={props => <HomePage {...props} />} />
          <Route path={`${match.url}/coaches`} render={props => <CoachesPage {...props} />} />
          <Route path={`${match.url}/find-coach`} render={props => <FindCoach {...props} />} />
          <Route path={`${match.url}/coach/:id`} render={props => <CoachDetailPage {...props} />} />
        </Switch>
      </Suspense>
    </AppLayout>
  )
}

export default User;